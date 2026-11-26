import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_USER_MESSAGES = 5;

const faqReplies: Record<string, string> = {
  travel: "Our local medical tourism partner in Istanbul can arrange optional flight tickets, accommodation and airport transfers on request, subject to availability and a separate quote. You can also book independently.",
  network: "We introduce patients to our independent authorised Turkish medical tourism company in Istanbul. That company coordinates consultations with healthcare professionals in its network. We do not independently verify unrelated clinics, provide medical advice or guarantee outcomes. You can contact a clinic directly if you prefer.",
  process:
    "CareBridge handles marketing, introductions and referrals only. With your permission we introduce you to our independent Turkish medical tourism partner in Istanbul. Only that partner arranges appointments, treatment and optional travel; licensed clinicians assess suitability and deliver care.",
  "womens-health":
    "Yes — we can help with selected women’s health and specialist gynaecological enquiries, particularly through Istanbul. These cases are approached with more privacy, more care, and a more general information and referral process before travel.",
  hair:
    "You can request an introduction to our independent Turkish medical tourism partner for hair transplant enquiries. It arranges consultations; only clinicians can assess suitability.",
  dental:
    "You can request an introduction to our independent Turkish medical tourism partner for dental enquiries. It arranges consultations; clinicians determine treatment options.",
  eye:
    "You can request an introduction to our independent Turkish medical tourism partner for eye treatment enquiries. It arranges consultations; clinicians determine treatment options.",
  istanbul:
    "Our introductions are currently limited to our independent Turkish medical tourism partner in Istanbul. It handles all appointment and treatment arrangements. Antalya is paused.",
  antalya:
    "Antalya referrals are temporarily unavailable. CareBridge Health only offers introductions to its independent partner in Istanbul.",
  cost:
    "Cost can vary a lot depending on the treatment, clinic level, destination, and how much support is included around the journey. In most cases, the more useful starting point is understanding fit first, then narrowing down realistic options.",
  safety:
    "Safety depends far more on clinic quality, case assessment, communication, and aftercare planning than on destination alone. A more careful selection process usually matters more than headline pricing.",
  consultation:
    "Send a free enquiry if you would like an introduction to our authorised Turkish medical tourism partner. The partner coordinates appointments and clinicians assess suitability.",
};

function normalizeFaqKey(value: string) {
  return value.trim().toLowerCase();
}

function trySmartFaqMatch(value: string) {
  const text = normalizeFaqKey(value);

  if (faqReplies[text]) return faqReplies[text];

  if (text.includes("antalya")) return faqReplies.antalya;
  if (/appoint|book|schedule|arrange|organis|organiz|partner application|licen[cs]e/.test(text)) return faqReplies.process;
  if (/flight|hotel|accommodation|transfer|airport|travel package/.test(text)) return faqReplies.travel;
  if (/verify|verification|network|directly|credentials|why carebridge/.test(text)) return faqReplies.network;
  if (text.includes("how") && text.includes("work")) return faqReplies.process;
  if (text.includes("process")) return faqReplies.process;
  if (text.includes("women")) return faqReplies["womens-health"];
  if (text.includes("gyn")) return faqReplies["womens-health"];
  if (text.includes("hair")) return faqReplies.hair;
  if (text.includes("dental")) return faqReplies.dental;
  if (text.includes("veneer")) return faqReplies.dental;
  if (text.includes("implant")) return faqReplies.dental;
  if (text.includes("eye")) return faqReplies.eye;
  if (text.includes("istanbul")) return faqReplies.istanbul;
  if (text.includes("antalya")) return faqReplies.antalya;
  if (text.includes("cost") || text.includes("price")) return faqReplies.cost;
  if (text.includes("safe") || text.includes("safety")) return faqReplies.safety;
  if (text.includes("consultation") || text.includes("review")) return faqReplies.consultation;

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({
        reply:
          "Hello — I can help with referral process, treatment categories, destinations, and the best next step before you submit an introduction request.",
      });
    }

    const userMessages = messages.filter((m) => m.role === "user");

    if (userMessages.length > MAX_USER_MESSAGES) {
      return NextResponse.json({
        reply:
          "I’ve shared the key guidance I can here. The best next step now is to submit the consultation form so your situation can be reviewed more carefully by email.",
        limitReached: true,
      });
    }

    const lastUserMessage = userMessages[userMessages.length - 1]?.content ?? "";
    const faqReply = trySmartFaqMatch(lastUserMessage);

    if (faqReply) {
      return NextResponse.json({
        reply: faqReply,
        usedFaq: true,
      });
    }

    const recentMessages = messages.slice(-8);

    const systemPrompt = `
You are the CareBridge Health website assistant for a UK-based independent marketing, introduction and referral service focused on Turkey and international patients, including the USA, UK, Canada and Europe. Do not assume visitors live in the UK.

Brand positioning:
- calm
- discreet
- premium
- warm
- intelligent
- reassuring
- never salesy
- never robotic

What the business does:
- activity is strictly limited to marketing, introductions and referrals. Never offer to arrange or book appointments, treatment, travel, quotes or clinical assessment on behalf of patients.
- clinical applicants are referred for evaluation by the independent Turkish medical tourism partner; CareBridge does not appoint doctors or clinics.
- helps international patients think more clearly about treatment in Turkey
- currently offers introductions to the independent partner in Istanbul only; Antalya is temporarily unavailable
- helps patients understand likely next steps before submitting an enquiry
- introduces patients only to its independent authorised Turkish medical tourism company in Istanbul, led by a specialist doctor; that company coordinates medical appointments and access to its own clinician network
- the local partner can arrange optional flight tickets, accommodation and airport transfers, subject to availability and separate quotes; patients may book independently
- does NOT independently verify unrelated doctors or clinics, guarantee credentials, or promise treatment safety
- receives a referral commission from the Turkish medical tourism company based on referred patients' purchased services; never charges patients or collects their payments; disclose this when relevant
- does not book medical appointments, sell treatments or travel packages, or employ treating doctors
- does NOT provide medical advice
- does NOT diagnose
- does NOT promise outcomes
- does NOT guarantee clinic availability
- does NOT pressure the user

How to respond:
- sound human, polished, and confident
- keep answers helpful but concise
- usually 45 to 110 words
- answer the question first
- then gently guide toward the consultation form when appropriate
- do not overuse exclamation marks
- do not sound like customer support boilerplate
- do not say "I am just an AI"
- do not mention internal limitations unless necessary

Topics you can help with:
- how the process works
- whether an Istanbul pathway may be appropriate
- treatment categories such as dental, hair transplant, eye treatment, cosmetic surgery, weight loss surgery, and selected women's health procedures
- how to think about clinic choice more carefully
- what kind of next step makes sense

Safety rules:
- never give medical advice
- never tell the user a treatment is suitable for them
- never estimate outcomes
- never say a clinic is definitely the right choice
- avoid exact pricing unless provided by the site content
- if the question is clinical, keep it general and encourage a proper consultation and provider review

Closing style:
- where relevant, end with a soft next-step sentence such as:
  "If you'd like, the next step is to submit the consultation form so we can respond about an introduction."
- vary wording naturally so it does not feel repetitive
`;

    const conversationText = recentMessages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    const input = `${systemPrompt}

Conversation so far:
${conversationText}

Write the next assistant reply.`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input,
      max_output_tokens: 180,
    });

    const reply =
      response.output_text?.trim() ||
      "The best next step is to submit an introduction request so we can respond about an introduction.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("chat route error", error);

    return NextResponse.json({
      reply:
        "The assistant is temporarily unavailable at the moment, but you can still submit an introduction request using the form and we’ll review it by email.",
    });
  }
}

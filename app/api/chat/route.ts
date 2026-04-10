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
  process:
    "The process is straightforward. You share a few details, we review the enquiry carefully, and then we reply with clearer next steps, likely destination fit, and whether there appears to be a suitable pathway worth exploring further.",
  "womens-health":
    "Yes — we can help with selected women’s health and specialist gynaecological enquiries, particularly through Istanbul. These cases are approached with more privacy, more care, and a more structured coordination process before travel.",
  hair:
    "Yes — we can help with selected hair transplant enquiries. The main aim is to understand what kind of result, planning, and clinic pathway may suit you best before you commit to anything.",
  dental:
    "Yes — we can help with selected dental enquiries such as implants, veneers, smile design, and broader restorative treatment planning. The best route depends on your goals, timing, and what level of structure you want around the process.",
  eye:
    "Yes — we can help with selected eye treatment enquiries through trusted partner clinics. A more careful review is usually the best next step so the destination and pathway can be thought through properly.",
  istanbul:
    "Istanbul is often the stronger fit for patients who prioritise specialist access, advanced hospitals, and more complex treatment pathways. It usually suits people who want a broader medical ecosystem around their decision.",
  antalya:
    "Antalya is often appealing for patients who value a calmer environment, a more recovery-focused setting, and strong value in selected procedures. It can feel more comfort-led overall, depending on the treatment type.",
  cost:
    "Cost can vary a lot depending on the treatment, clinic level, destination, and how much support is included around the journey. In most cases, the more useful starting point is understanding fit first, then narrowing down realistic options.",
  safety:
    "Safety depends far more on clinic quality, case assessment, communication, and aftercare planning than on destination alone. A more careful selection process usually matters more than headline pricing.",
  consultation:
    "A private consultation request is the best next step when you want clearer direction. It gives enough context to think more carefully about treatment fit, destination, and what pathway may make the most sense.",
};

function normalizeFaqKey(value: string) {
  return value.trim().toLowerCase();
}

function trySmartFaqMatch(value: string) {
  const text = normalizeFaqKey(value);

  if (faqReplies[text]) return faqReplies[text];

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
          "Hello — I can help with treatment fit, destinations, process, and the best next step before you submit a private consultation request.",
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
You are the CareBridge Health website assistant for a premium UK-facing medical treatment coordination service focused on Turkey.

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
- helps UK-based patients think more clearly about treatment in Turkey
- helps patients compare Istanbul and Antalya
- helps patients understand likely next steps before submitting an enquiry
- coordinates introductions and structured guidance where appropriate
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
- whether Istanbul or Antalya may be a better fit
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
  "If you'd like, the next step is to submit the consultation form so your case can be reviewed more carefully."
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
      "The best next step is to submit a private consultation request so your case can be reviewed more carefully.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("chat route error", error);

    return NextResponse.json({
      reply:
        "The assistant is temporarily unavailable at the moment, but you can still submit a private consultation request using the form and we’ll review it by email.",
    });
  }
}
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
    "The process is simple: you submit a consultation request, we review the case carefully, and then we respond with the next step and whether there is a suitable clinic fit.",
  "womens-health":
    "We can help coordinate selected women’s health and specialised gynaecological procedures through trusted partner clinics in Istanbul. These cases are handled with particular privacy and care.",
  hair:
    "We can help with hair transplant enquiries through selected partner clinics. The best next step is to submit your request so we can review your case properly.",
  dental:
    "We can help with selected dental treatments including implants, veneers, and smile design. Suitability and planning are always reviewed individually.",
  eye:
    "We can help with selected eye treatment enquiries through trusted partner clinics. The next step is a private consultation request so the case can be reviewed properly.",
};

function normalizeFaqKey(value: string) {
  return value.trim().toLowerCase();
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: ChatMessage[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({
        reply:
          "I’d be happy to help. You can ask about treatment areas, process, or the next step.",
      });
    }

    const userMessages = messages.filter((m) => m.role === "user");

    if (userMessages.length > MAX_USER_MESSAGES) {
      return NextResponse.json({
        reply:
          "I’ve shared the key guidance I can here. The best next step is to submit the consultation form so your request can be reviewed properly by email.",
        limitReached: true,
      });
    }

    const lastUserMessage = userMessages[userMessages.length - 1]?.content ?? "";
    const faqKey = normalizeFaqKey(lastUserMessage);

    if (faqReplies[faqKey]) {
      return NextResponse.json({
        reply: faqReplies[faqKey],
        usedFaq: true,
      });
    }

    const recentMessages = messages.slice(-6);

    const systemPrompt = `
You are the CareBridge Health assistant for private medical treatment coordination in Turkey.

Style:
- calm
- concise
- premium
- reassuring
- never pushy

Goals:
- answer basic questions about process and treatment categories
- encourage the user to submit a consultation request when appropriate
- do not diagnose
- do not promise outcomes
- do not promise availability
- do not provide medical advice
- keep responses under 80 words
`;

    const conversationText = recentMessages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    const input = `${systemPrompt}

Conversation so far:
${conversationText}

Assistant:`;

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input,
    });

    const reply =
      response.output_text?.trim() ||
      "The best next step is to submit a private consultation request so your case can be reviewed properly.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("chat route error", error);

    return NextResponse.json({
      reply:
        "The assistant is temporarily unavailable. You can still submit a private consultation request using the form below.",
    });
  }
}
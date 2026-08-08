"use server";

export interface AuditData {
  fullName: string;
  emailOrPhone: string;
  websiteUrl?: string;
  scaleNote?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendTelegramNotification(type: "audit" | "newsletter", payload: string | AuditData) {
  const token = process.env.TG_KEY;
  const chatId = process.env.TG_CHAT_ID_KEY;

  console.log("Telegram Service Action invoked.");
  console.log("TG_KEY configured:", !!token);
  console.log("TG_CHAT_ID_KEY configured:", !!chatId);

  if (!token || !chatId) {
    console.error("Telegram environment variables TG_KEY or TG_CHAT_ID_KEY are not configured.");
    return { success: false, error: "Env variables missing" };
  }

  let text = "";
  if (type === "audit") {
    const data = payload as AuditData;
    text = `<b>🔔 New Growth Audit Request</b>\n\n` +
           `👤 <b>Name:</b> ${escapeHtml(data.fullName)}\n` +
           `📞 <b>Contact:</b> <code>${escapeHtml(data.emailOrPhone)}</code>\n` +
           `🌐 <b>Website:</b> ${escapeHtml(data.websiteUrl || "N/A")}\n` +
           `📝 <b>Help Note:</b> ${escapeHtml(data.scaleNote || "N/A")}`;
  } else {
    text = `<b>📩 New Newsletter Subscription</b>\n📧 Email: <code>${escapeHtml(payload as string)}</code>`;
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Telegram API response error:", data);
      return { success: false, error: data.description || "Telegram API rejected request" };
    }

    console.log("Telegram notification sent successfully.");
    return { success: true };
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return { success: false, error: String(error) };
  }
}

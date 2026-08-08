"use server";

export async function sendTelegramNotification(type: "audit" | "newsletter", email: string) {
  const token = process.env.TG_KEY;
  const chatId = process.env.TG_CHAT_ID_KEY;

  if (!token || !chatId) {
    console.error("Telegram environment variables TG_KEY or TG_CHAT_ID_KEY are not configured.");
    return { success: false, error: "Configuration error" };
  }

  const text = type === "audit" 
    ? `🔔 *New Growth Audit Request*\n📧 Email: \`${email}\`` 
    : `📩 *New Newsletter Subscription*\n📧 Email: \`${email}\``;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Telegram API response error:", data);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send Telegram notification:", error);
    return { success: false };
  }
}

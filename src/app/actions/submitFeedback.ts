"use server";

import { google } from "googleapis";

export async function submitFeedback(
  prevState: { message: string }, // Предыдущее состояние
  formData: FormData // Данные формы
): Promise<{ message: string }> {
  try {
    const email = formData.get("email") as string;
    const comment = formData.get("comment") as string;

    if (!email || !comment) {
      throw new Error("Email и комментарий обязательны для заполнения.");
    }

    // Аутентификация
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Указываем диапазон, куда добавлять данные (например, "Sheet1!A:B")
    const range = "Sheet2!A:B";

    // Добавляем новую строку в таблицу
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: range,
      valueInputOption: "USER_ENTERED", // Данные будут интерпретироваться как введенные пользователем
      requestBody: {
        values: [[email, comment, new Date().toISOString()]], // Добавляем email, комментарий и текущую дату
      },
    });

    return { message: "Спасибо за ваш отзыв!" };
  } catch (error: any) {
    console.error("Ошибка при отправке данных:", error);
    return {
      message: "Произошла ошибка при отправке отзыва. Попробуйте позже.",
    };
  }
}

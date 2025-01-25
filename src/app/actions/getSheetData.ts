"use server";

import { google } from "googleapis";

export type Product = {
  id: string;
  name: string;
  price: string;
  category: string;
  servings: string;
  link: string;
  description: string;
  imageUrl: string;
};

export async function getSheetData(): Promise<Product[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Указываем диапазон, включающий столбец с URL изображений
    const range = "Sheet1!A1:H10";

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: range,
    });

    if (!response.data.values) {
      throw new Error("No data found in the specified range");
    }

    // Преобразуем данные в массив объектов
    const data: Product[] = response.data.values.slice(1).map((row) => ({
      id: row[0],
      name: row[1],
      category: row[2],
      servings: row[3],
      price: row[4],
      link: row[5],
      description: row[6],
      imageUrl: row[7],
    }));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}

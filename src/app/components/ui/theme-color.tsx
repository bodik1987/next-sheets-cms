"use client";

import { useEffect } from "react";

export default function ThemeColor() {
  useEffect(() => {
    const handleThemeChange = () => {
      const theme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      const themeColor = theme === "dark" ? "#0D0D0D" : "#E8EAED";
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", themeColor);
      }
    };

    // Наблюдаем за изменениями в атрибутах класса html элемента
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Вызываем обработчик при первой загрузке
    handleThemeChange();

    return () => observer.disconnect();
  }, []);
  return (
    <head>
      <meta name="theme-color" content="#DC2626" />
    </head>
  );
}

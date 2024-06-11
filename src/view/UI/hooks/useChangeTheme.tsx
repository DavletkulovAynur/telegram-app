import { useEffect, useRef, useState } from "react";
import { useViewModel } from "./useViewModel.tsx";
import { IAppVM, TTheme } from "../../viewModels/App/types.ts";
import { AppBarID } from "../components/Header";

export interface IChangeTheme {
  theme: TTheme;
  setTheme: IAppVM["setTheme"];
}

/**
 * Изменение темы приложения и цвета статус бара в зависимости от темы
 */
export const useChangeTheme = (): IChangeTheme => {
  const { theme, setTheme } = useViewModel("app");
  const [bg, setBg] = useState("");
  const htmlRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const themeColorMetaRef = useRef<HTMLElement | null>(null);
  const bodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // AppBarID это id элемента приложения <AppBar />
    headerRef.current = document.querySelector(AppBarID);
    htmlRef.current = document.querySelector("html");
    bodyRef.current = document.querySelector("body");
    themeColorMetaRef.current = document.querySelector(
      "meta[name='theme-color']",
    );

    if (!headerRef.current) {
      return;
    }

    const headerStyles = getComputedStyle(headerRef.current);
    setBg(headerStyles.backgroundColor);
  }, [theme]);

  // Изменение цвета статус бара в зависимости от темы для Android
  useEffect(() => {
    if (!themeColorMetaRef.current || !bg) {
      return;
    }

    themeColorMetaRef.current.setAttribute("content", bg);
  }, [bg]);

  // Изменение цвета статус бара в зависимости от темы для iOS
  useEffect(() => {
    if (!bodyRef.current || !bg) {
      return;
    }

    bodyRef.current.style.backgroundColor = bg;
  }, [bg]);

  // Изменение темы приложения через тег <html>
  useEffect(() => {
    if (!htmlRef.current) {
      return;
    }

    htmlRef.current.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};

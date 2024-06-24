import { Telegram } from "./src/telegramTypes";

declare global {
  interface Window {
    Telegram: {
      WebApp: Telegram["WebApp"];
    };
  }
}

export {};

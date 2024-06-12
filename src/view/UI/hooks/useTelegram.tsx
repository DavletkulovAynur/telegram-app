import { TelegramWebApp } from "../../../../global";

let tg: TelegramWebApp | null = null;

if (window.Telegram) {
  tg = window.Telegram.WebApp;
}
export const useTelegram = () => {
  return tg
}
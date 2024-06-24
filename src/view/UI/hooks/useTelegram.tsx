import { Telegram } from "../../../telegramTypes";

const tg: Telegram["WebApp"] = window.Telegram.WebApp;

export const useTelegram = () => {
  const isTelegramExist = Boolean(tg && tg.initData);
  return {
    tg,
    isTelegramExist,
  };
};

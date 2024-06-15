// global.d.ts
// global.d.ts
interface ThemeParams {
  secondary_bg_color: string;
}

export interface TelegramWebApp {
  ready: () => void;
  initDataUnsafe: {
    user: {
      first_name: string;
      last_name: string;
    };
    themeParams: ThemeParams;
  };
  colorScheme: "light" | "dark";
  MainButton: {
    setText: (text: string) => void;
    show: () => void;
    onClick: (callback: () => void) => void;
  };
  BackButton: {
    setText: (text: string) => void;
    show: () => void;
    onClick: (callback: () => void) => void;
    hide: () => void;
  };
  setHeaderColor: (color: string) => void;
  sendData: (data: string) => void;
  close: () => void;
  showPopup: (params: {
    title: string;
    message: string;
    buttons: Array<{ id: string; type: string }>;
  }) => void;
  themeParams: {
    secondary_bg_color: string;
  };
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp; // Вы можете заменить 'any' на конкретный тип, если он у вас есть
    };
  }
}

export {};

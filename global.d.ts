// global.d.ts
export interface TelegramWebApp {
  ready: () => void;
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
  sendData: (data: string) => void;
  close: () => void;
  initDataUnsafe: {
    user: {
      first_name: string;
      last_name: string;
    };
  };
  showPopup: (params: { title: string; message: string; buttons: Array<{ id: string; type: string }> }) => void;
}

declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp; // Вы можете заменить 'any' на конкретный тип, если он у вас есть
    };
  }
}

export {};

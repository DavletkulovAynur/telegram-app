import { BaseVM } from "../BaseVM";
import { IAppVM, TTheme } from "./types";
import { CONSTANTS } from "../../../constants";
import { action, makeObservable, observable } from "mobx";

export class AppVM extends BaseVM implements IAppVM {
  theme: TTheme;

  constructor() {
    super();
    makeObservable(this, {
      theme: observable,
      setTheme: action,
    });
    const systemThemeIsDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = localStorage.getItem(CONSTANTS.themeKey) as TTheme | null;

    this.theme = theme || (systemThemeIsDark ? "dark" : "light");
  }

  setTheme = (theme: TTheme) => {
    localStorage.setItem(CONSTANTS.themeKey, theme);
    this.theme = theme;
  };
}

import {
  ECurrencyISO,
  getCurrency,
  CurrenciesDictionary,
} from "../getCurrency";

describe("getCurrency", () => {
  test("возвращает правильный знак валюты, если он присутствует в словаре", () => {
    expect(getCurrency(ECurrencyISO.RUB)).toBe(CurrenciesDictionary.RUB);
  });

  test("возвращает описание валюты, если знака валюты нет в словаре", () => {
    expect(getCurrency("EUR" as ECurrencyISO)).toBe("EUR");
  });
});

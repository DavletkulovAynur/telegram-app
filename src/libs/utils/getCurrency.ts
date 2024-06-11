export enum ECurrencyISO {
  RUB = "RUB",
  USD = 'USD'
}

export const CurrenciesDictionary: Record<ECurrencyISO, string> = {
  [ECurrencyISO.RUB]: "₽",
  [ECurrencyISO.USD]: "$",
};

export const getCurrency = (currency: ECurrencyISO): string => {
  return CurrenciesDictionary[currency] || currency;
};

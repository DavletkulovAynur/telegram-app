import { getErrorText } from "../getErrorText";

describe("getErrorText", () => {
  test("возвращает undefined, если ошибок нет", () => {
    const errors = {};
    const valuePath = "fieldName";
    const result = getErrorText(errors, valuePath);
    expect(result).toBeUndefined();
  });

  test("возвращает текст ошибки из словаря для известного типа", () => {
    const errors = {
      fieldName: { type: "required" },
    };
    const valuePath = "fieldName";
    const result = getErrorText(errors, valuePath);
    expect(result).toBe("Обязательное поле");
  });
});

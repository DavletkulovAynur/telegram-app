import { useEffect, useState, FC } from "react";

interface IProps {
  variableName: string;
}
const useCssVariable: FC<IProps> = ({ variableName }): string => {
  const [value, setValue] = useState<string>("#000");

  useEffect(() => {
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const variableValue = style.getPropertyValue(variableName).trim(); // trim для удаления возможных пробелов
    setValue(variableValue || "#000");
  }, [variableName]);

  return value;
};

export default useCssVariable;

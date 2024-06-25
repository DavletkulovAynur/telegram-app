import { FC } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconButton } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { useSnackbar } from "../../providers/SnackbarProvider";

interface IProps {
  phone: string;
}
const CopyPhoneNumberButton: FC<IProps> = ({ phone }) => {
  const { showSnackbar } = useSnackbar();

  const handleCopy = () => {
    showSnackbar("Номер скопирован", "success");
    navigator.clipboard.writeText(phone); // или использовать библиотеку для копирования
  };

  return (
    <CopyToClipboard text={phone} onCopy={handleCopy}>
      <IconButton>
        <ContentCopyOutlinedIcon />
      </IconButton>
    </CopyToClipboard>
  );
};

export default CopyPhoneNumberButton;

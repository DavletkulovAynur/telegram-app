import {
  createContext,
  useState,
  useCallback,
  useContext,
  ReactNode,
} from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarContextType {
  showSnackbar: (
    message: string,
    severity?: "success" | "info" | "warning" | "error",
  ) => void;
}

// Создаем контекст с типом или передаем null как значение по умолчанию
const SnackbarContext = createContext<SnackbarContextType | null>(null);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const showSnackbar = useCallback(
    (
      message: string,
      severity: "success" | "info" | "warning" | "error" = "success",
    ) => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
    },
    [],
  );

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

// Хук для использования контекста
export const useSnackbar = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

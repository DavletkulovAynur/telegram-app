import { Chip, Link } from "@mui/material";
import css from "./styles.module.scss";
import { useChipAnalytics } from "./useChipAnalytics";

export const AddAgencyChip = () => {
  const { event } = useChipAnalytics();

  return (
    <Chip
      variant="outlined"
      component={Link}
      target="_blank"
      clickable
      onClick={event}
      href="https://forms.gle/H3Rouwa1PQVj1Mru7"
      label="Добавить агентство"
      className={css.addAgencyChip}
    />
  );
};

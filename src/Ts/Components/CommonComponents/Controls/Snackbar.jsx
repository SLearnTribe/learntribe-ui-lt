import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertStylesConfig } from "../../../Configs/AppConfig";
import { updateSnackbar } from "../../../Redux/Ducks/App/AppSlice";
import { getSnackbarDetails } from "../../../Redux/Selectors/AppSelectors";
import { EmptySnackbarState } from "../../../Utils/AppUtils";

export const AlertSnackbar = () => {
  const dispatch = useDispatch();

  const { open, text, variant, severity } = useSelector(getSnackbarDetails);

  const onClose = () => {
    dispatch(updateSnackbar(EmptySnackbarState));
  };

  return open ? (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={true}
      autoHideDuration={5000}
      onClose={onClose}>
      <Alert
        onClose={onClose}
        sx={alertStylesConfig[severity]}
        variant={variant}
        severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  ) : null;
};

import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import { green } from "@mui/material/colors";

export const CircularSaveButton = ({
  isLoading,
  handleButtonClick = () => null,
}) => {
  const buttonSx = {
    ...(!isLoading && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <Fab
        aria-label="save"
        color="primary"
        sx={buttonSx}
        onClick={handleButtonClick}>
        {isLoading ? <SaveIcon /> : <CheckIcon />}
      </Fab>
      {isLoading && (
        <CircularProgress
          size={68}
          sx={{
            color: green[500],
            position: "absolute",
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

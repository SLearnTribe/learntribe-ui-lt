import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export const CheckboxWithLabel = ({
  label,
  checked,
  onChange,
  sx = {},
  disabled = false,
}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox disabled={disabled} onChange={onChange} checked={checked} />
        }
        label={<Typography sx={sx}>{label}</Typography>}
      />
    </FormGroup>
  );
};

export const DeleteIconWithLabel = ({
  label,
  onClick,
  sx = {},
  iconSx = {},
  disabled = false,
}) => {
  return (
    <FormGroup onClick={onClick} disabled={disabled}>
      <FormControlLabel
        sx={sx}
        control={<DeleteOutlinedIcon sx={iconSx} color={"primary"} />}
        label={<Typography sx={sx}>{label}</Typography>}
      />
    </FormGroup>
  );
};

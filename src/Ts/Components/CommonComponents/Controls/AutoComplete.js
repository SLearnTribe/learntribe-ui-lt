import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Autocomplete, Checkbox, Chip, TextField } from "@mui/material";
import React from "react";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const AutoCompleteMultiSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  disabled = false,
}) => {
  return (
    <Autocomplete
      disabled={disabled}
      multiple
      limitTags={2}
      id={label}
      options={options}
      value={value}
      freeSolo
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      onChange={onChange}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export const AutoCompleteSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder,
  index,
  getOptionLabelDataField = "title",
  disabled = false,
  error = false,
  required = false,
}) => {
  return (
    <Autocomplete
      disabled={disabled}
      id={label}
      options={options}
      value={value}
      onChange={(_e, value) => onChange(_e, value, index)}
      getOptionLabel={(option) => option[getOptionLabelDataField]}
      isOptionEqualToValue={(option, value) =>
        option[getOptionLabelDataField] === value[getOptionLabelDataField]
      }
      renderInput={(params) => (
        <TextField
          error={error}
          required={required}
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export const AutoCompleteAddTags = ({
  options = [],
  defaultValue = [],
  value,
  onInputChange,
  label,
  placeholder,
  sx = {},
  disabled = false,
  error = false,
  required = false,
}) => {
  return (
    <Autocomplete
      disabled={disabled}
      multiple
      id="tags-filled"
      options={options}
      defaultValue={defaultValue}
      value={value}
      freeSolo
      onChange={onInputChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            color="primary"
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          error={error}
          required={required}
          sx={sx}
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

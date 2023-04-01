import {
  InputAdornment,
  TextField,
} from "../../../components/common/collections";
import { IProps } from "./type";

const FormTextField: React.FC<IProps> = (props) => {
  const {
    position = "end",
    icon,
    name,
    label,
    size = "small",
    variant = "standard",
    disabled = false,
    fullWidth = false,
    margin = "normal",
    multiline = false,
    placeholder,
    value,
    onChange,
    onKeyPress,
  } = props;

  return (
    <TextField
      name={name}
      label={label}
      size={size}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      margin={margin}
      multiline={multiline}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment sx={{ cursor: "pointer" }} position={position}>
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default FormTextField;

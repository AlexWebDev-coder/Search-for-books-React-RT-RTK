export interface IProps {
  position?: "start" | "end";
  icon?: any;
  name?: string;
  control?: any;
  label?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  value: string | number;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

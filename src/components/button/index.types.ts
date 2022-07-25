import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
   * Size of the button
   * @default base
   */
  size?: "sm" | "base";
  /**
   * Make the button full width or not
   * @default false
   */
  fullWidth?: boolean;
}

import clsx from "clsx";
import { ButtonProps } from "./index.types";

const Button = ({
  children,
  className,
  size = "base",
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const sizeObj = {
    sm: "text-sm",
    base: "text-base",
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className,
        fullWidth && "w-full",
        sizeObj[size]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

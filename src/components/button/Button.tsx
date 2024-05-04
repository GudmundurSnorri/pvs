type ButtonProps = {
  text: string;
  onClick?: () => void;
  isInverted?: boolean;
  type?: "button" | "submit";
};

const Button = ({ onClick, text, isInverted = false, type }: ButtonProps) => {
  const backgroundColor = isInverted ? "bg-red-main" : "bg-white";
  const textColor = isInverted ? "text-white" : "text-red-main";
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${textColor} ${backgroundColor} py-2 px-6 rounded-lg font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;

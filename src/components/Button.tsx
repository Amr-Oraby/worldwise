import styles from "./Button.module.css";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
  disabled?: boolean;
};
function Button({ children, onClick, type, disabled }: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

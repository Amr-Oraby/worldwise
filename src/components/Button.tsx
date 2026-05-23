import styles from "./Button.module.css";
type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: string;
};
function Button({ children, onClick, type }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

import Button from "./Button";
import { useNavigate } from "react-router-dom";
function BackButton({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {children}
    </Button>
  );
}

export default BackButton;

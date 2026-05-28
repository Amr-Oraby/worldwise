import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { useEffect, type CSSProperties } from "react";
import Spinner from "../components/Spinner";

const FullPageStyle: CSSProperties = {
  height: "100vh",
  backgroundColor: "var(--color-grey-50)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading)
    return (
      <div style={FullPageStyle}>
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
  return null;
}

export default ProtectedRoute;

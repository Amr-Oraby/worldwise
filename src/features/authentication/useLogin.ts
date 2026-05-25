import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isPending: isLoginingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/app");
    },
  });

  return { login, isLoginingIn };
}

export default useLogin;

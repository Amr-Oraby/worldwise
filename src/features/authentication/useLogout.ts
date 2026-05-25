import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLoginingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/");
    },
  });

  return { logout, isLoginingOut };
}

export default useLogout;

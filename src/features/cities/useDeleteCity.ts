import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../../services/apiCities";

function useDeleteCity() {
  const queryClient = useQueryClient();
  const { mutate: deleteCity, isPending: isDeleting } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
  return { deleteCity, isDeleting };
}

export default useDeleteCity;

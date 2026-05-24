import { useMutation } from "@tanstack/react-query";
import { deleteCity as deleteCityApi } from "../../services/apiCities";

function useDeleteCity() {
  const { mutate: deleteCity, isPending } = useMutation({
    mutationFn: deleteCityApi,
  });
  return { deleteCity, isPending };
}

export default useDeleteCity;

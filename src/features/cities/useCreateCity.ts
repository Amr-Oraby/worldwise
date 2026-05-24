import { useMutation } from "@tanstack/react-query";
import { createCity as createCityApi } from "../../services/apiCities";

function useCreateCity() {
  const { mutate: createCity, isPending } = useMutation({
    mutationFn: createCityApi,
  });
  return { createCity, isPending };
}

export default useCreateCity;

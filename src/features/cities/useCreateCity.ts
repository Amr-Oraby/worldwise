import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCity as createCityApi } from "../../services/apiCities";
import { useState } from "react";
import type { CityType } from "../../types/cityTypes";

function useCreateCity() {
  const queryClient = useQueryClient();
  const [currentCity, setCurrentCity] = useState<CityType | null>(null);
  const { mutate: createCity, isPending: isCreating } = useMutation({
    mutationFn: createCityApi,
    onSuccess: (data: CityType) => {
      setCurrentCity(data);
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
  return { createCity, isCreating, currentCity };
}

export default useCreateCity;

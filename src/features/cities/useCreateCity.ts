import { useMutation } from "@tanstack/react-query";
import { createCity as createCityApi } from "../../services/apiCities";
import { useState } from "react";
import type { CityType } from "../../types/cityTypes";

function useCreateCity() {
  const [currentCity, setCurrentCity] = useState<CityType | null>(null);
  const { mutate: createCity, isPending } = useMutation({
    mutationFn: createCityApi,
    onSuccess: (data: CityType) => setCurrentCity(data),
  });
  return { createCity, isPending, currentCity };
}

export default useCreateCity;

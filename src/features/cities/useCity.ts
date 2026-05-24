import { useQuery } from "@tanstack/react-query";
import { getCity } from "../../services/apiCities";
import type { CityType } from "../../types/cityTypes";
import { useParams } from "react-router-dom";

function useCity() {
  const { id } = useParams();
  const { data: city, isLoading } = useQuery<CityType, Error>({
    queryKey: ["city", id],
    queryFn: () => getCity(Number(id)),
  });

  return { city, isLoading };
}

export default useCity;

import { useQuery } from "@tanstack/react-query";
import { getCity } from "../../services/apiCities";

function useCity() {
  const id = 1;
  const { data: city, isLoading } = useQuery({
    queryKey: ["city", id],
    queryFn: () => getCity(id),
  });

  return { city, isLoading };
}

export default useCity;

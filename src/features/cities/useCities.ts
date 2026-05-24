import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../services/apiCities";

function useCities() {
  const { data: cities, isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  return { cities, isLoading };
}

export default useCities;

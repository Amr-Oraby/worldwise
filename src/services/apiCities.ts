import type { CityType } from "../types/cityTypes";
import { supabase } from "./supbase";

export async function getCities() {
  const { data, error } = await supabase.from("cities").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cities could not be loaded");
  }
  return data;
}

export async function getCity(id: number) {
  const { data, error } = await supabase
    .from("cities")
    .select("*")
    .eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("City could not be loaded");
  }

  return data;
}

export async function deleteCity(id: number) {
  const { data, error } = await supabase.from("cities").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("City could not be deleted");
  }

  return data;
}

export async function createCity(newCity: CityType) {
  const { data, error } = await supabase
    .from("cities")
    .insert([newCity])
    .select();
  if (error) {
    console.error(error);
    throw new Error("City could not be deleted");
  }

  return data;
}

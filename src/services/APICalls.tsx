import { supabase } from "./supabase";

export const fetchAllItems = async () => {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    console.error("Error fetching items:", error.message);
    return [];
  }

  return data;
};

export const fetchOneItem = async (id: string) => {
  const { data, error } = await supabase.from("items").select("*").eq("id", id);

  if (error) {
    console.error("Error fetching items:", error.message);
    return [];
  }

  return data;
};
export const fetchPatternById = async (id: string) => {
  const { data, error } = await supabase
    .from("Pattern")
    .select("*")
    .eq("item_id", id);

  if (error) {
    console.error("Error fetching items:", error.message);
    return [];
  }

  return data;
};

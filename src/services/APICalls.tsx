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

export const fetchItemByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("category", category);
  if (error) {
    console.log("Error fetching categories:", error.message);
    return [];
  }
  return data;
};
export const fetchItemByDifficulty = async (difficulty: string) => {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("difficulty", difficulty);
  if (error) {
    console.log("Error fetching categories:", error.message);
    return [];
  }
  return data;
};
export const fetchItemByHookSize = async (hookSize: string) => {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("hook_size", hookSize);
  if (error) {
    console.log("Error fetching categories:", error.message);
    return [];
  }
  return data;
};

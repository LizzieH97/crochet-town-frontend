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

export async function signUpUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Sign-up error:", error.message);
    return { success: false, error };
  }

  return { success: true, user: data.user };
}

export async function updateProfile(userId: string, profileData: any) {
  if (!userId) {
    console.error("No userId provided to updateProfile");
    return { success: false, error: new Error("Missing user ID") };
  }

  const { data, error } = await supabase
    .from("profiles")
    .update(profileData)
    .eq("id", userId); // ✅ this must not be empty

  if (error) {
    console.error("Error updating profile:", error.message);
    return { success: false, error };
  }

  return { success: true, data };
}

export async function uploadAvatar(userId: string, file: File) {
  if (!file || !file.name) {
    return { success: false, error: new Error("Invalid file selected") };
  }

  const fileExt = file.name.split(".").pop();
  if (!fileExt) {
    return {
      success: false,
      error: new Error("Cannot determine file extension"),
    };
  }

  const fileName = `${userId}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) {
    console.error("Avatar upload error:", error.message);
    return { success: false, error };
  }

  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  const publicUrl = publicUrlData?.publicUrl;

  return { success: true, url: publicUrl };
}

import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";

type UserProfile = {
  id: string;
  username: string;
  full_name: string;
  bio: string;
  avatar_url: string;
};

export function UserProfile() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        setError(userError?.message || "No user found.");
        setLoading(false);
        return;
      }

      setUser(user);

      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }

      setProfile(profileData);
      setLoading(false);
    };

    fetchUserAndProfile();
  }, []);

  return { user, profile, loading, error };
}

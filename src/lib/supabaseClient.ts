import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_project,
  import.meta.env.VITE_anon
);
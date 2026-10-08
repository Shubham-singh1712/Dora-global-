import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

/**
 * Server-only Supabase client.
 * Guarantees that SUPABASE_SERVICE_ROLE_KEY is never accessible from browser runtime.
 */
export function getSupabaseServerClient(useServiceRole = false) {
  if (typeof window !== "undefined") {
    throw new Error(
      "Security Exception: getSupabaseServerClient cannot be executed in browser context."
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    return null;
  }

  // Use service role key if requested and available, otherwise fallback to anon key
  const apiKey = useServiceRole && serviceRoleKey ? serviceRoleKey : anonKey;

  if (!apiKey) {
    return null;
  }

  return createClient<Database>(supabaseUrl, apiKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

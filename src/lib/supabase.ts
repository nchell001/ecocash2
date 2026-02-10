import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Don't crash the whole app if env vars are missing.
  // Features that rely on Supabase should handle the null case gracefully.
  console.warn('Supabase environment variables are missing; Supabase features are disabled.');
}

export { supabase };

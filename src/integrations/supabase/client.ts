// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xuqsgfvpgajeiusvxvrb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1cXNnZnZwZ2FqZWl1c3Z4dnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NTU5OTcsImV4cCI6MjA1OTUzMTk5N30.hZGZ-hBylGJP7MWp_yjAkv6Opu58C5Oe_H0YTsCHx98";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
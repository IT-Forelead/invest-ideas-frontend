import { createClient } from '@supabase/supabase-js'

const DB_URL = import.meta.env.VITE_SUPABASE_URL
const DB_API_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(DB_URL, DB_API_KEY)
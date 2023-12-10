import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://xbaugsvuvnumbzjzsygn.supabase.co';
const supabaseSecret = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseSecret);
export default supabase;
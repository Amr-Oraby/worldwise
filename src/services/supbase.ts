import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kytbktycbeghkmfnboqj.supabase.co";
const supabaseKey = "sb_publishable_TIwNikQKM4PEOBcexX7ZlQ_H1AKmM4f";

export const supabase = createClient(supabaseUrl, supabaseKey);

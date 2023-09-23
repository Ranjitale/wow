import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://geggelselfabpaljhrnm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZ2dlbHNlbGZhYnBhbGpocm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMzc3OTAsImV4cCI6MjAxMDcxMzc5MH0.hV1UIgYDDXje2-tpliSbX1l_d5mf2upKiaPtyOB-8-I"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
// Now you can use the `supabase` client object to interact with your Supabase project.

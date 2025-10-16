import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.signup = async () => {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert("Signup successful! Please check your email for verification.");
};

window.login = async () => {
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else alert("Login successful!");
};
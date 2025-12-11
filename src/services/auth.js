
import { supabase } from "../supabaseClient";


export async function signUp(username, password) {
  const email = `${username}@game.local`;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}


export async function signIn(username, password) {
  const email = `${username}@game.local`;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}


export async function signOut() {
  return supabase.auth.signOut();
}


export function getCurrentUser() {
  return supabase.auth.getUser();
}

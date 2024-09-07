"use server";
import * as auth from "@/auth";

export const signIn = () => {
//   will get provider as parameter
  return auth.signIn("github");
};
export const signOut = () => {
  return auth.signOut();
};

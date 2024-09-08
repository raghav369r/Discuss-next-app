"use server";
import * as auth from "@/auth";

export const signIn = async () => {
  //   will get provider as parameter
  return auth.signIn("github");
};
export const signOut = async () => {
  return auth.signOut();
};

// export { createComment } from "@/actions/create-comment";
// export { createPost } from "@/actions/create-post";
// export { createTopic } from "@/actions/create-topic";

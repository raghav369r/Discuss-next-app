import prisma from "@/DB";
import React from "react";
import { PostView } from "../../page";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
    slug: string;
  };
};

const PostShow = async (props: Props) => {
  const { postId, slug } = props.params;
  const post = await prisma.post.findFirst({
    where: { id: postId },
  });
  if (!post) return notFound();
  return <PostView post={post} slug={slug} />;
};

export default PostShow;

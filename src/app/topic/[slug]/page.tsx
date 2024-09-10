import PostCreateForm from "@/components/post/PostCreateForm";
import prisma from "@/DB";
import paths from "@/path";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { slug: string };
};

const TopicShow = async (props: Props) => {
  const { slug } = props.params;
  const { id: topicId } =
    (await prisma.topic.findFirst({ where: { slug } })) || {};
  if (!topicId) return notFound();
  const posts = await prisma.post.findMany({ where: { topicId } });
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-semibold">{slug}</h1>
        <div className="flex flex-col gap-3 p-4">
          {posts.map((post) => (
            <PostView post={post} slug={slug} key={post.id} />
          ))}
        </div>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};
export default TopicShow;

export const PostView = ({
  post,
  slug,
}: {
  post: { id: string; content: string; title: string };
  slug: string;
}) => {
  return (
    <Link
      href={paths.postShow(slug, post.id)}
      key={post.id}
      className="flex flex-col gap-2 border rounded p-3 cursor-pointer"
    >
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{post.content}</p>
    </Link>
  );
};

import TopicCreateForm from "@/components/topic/TopicCreateForm";
import TopicList from "@/components/topic/TopicList";
import prisma from "@/DB";
import { PostView } from "./topic/[slug]/page";

type Props = {};

const Home = async (props: Props) => {
  const topPosts = await prisma.post.findMany({ take: 10 });
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 gap-3 p-3">
        <h1 className="text-xl">Top Topics</h1>
        <div className="p-4 flex flex-col gap-3">
          {topPosts.map((post) => (
            <PostView post={post} key={post.id} slug="python" />
          ))}
        </div>
      </div>
      <div>
        <TopicCreateForm />
        <TopicList />
      </div>
    </div>
  );
};

export default Home;

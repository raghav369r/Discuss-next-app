import TopicCreateForm from "@/components/topic/TopicCreateForm";

type Props = {};

const Home = async (props: Props) => {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 gap-3 p-3">
        <h1 className="text-xl">Top Topics</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
};

export default Home;

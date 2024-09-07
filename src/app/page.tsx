import { Button } from "@nextui-org/react";
import React from "react";
import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import Auth from "@/components/Auth";

type Props = {};

const Home = async (props: Props) => {
  const session = await auth();
  // console.log("session: ",session);
  return (
    <div className="flex-center flex-col">
      <form action={session?.user ? signOut : signIn}>
        <Button type="submit" className="bg-blue-600 text-white">
          {session?.user ? "SignOut" : "SignIn"}
        </Button>
      </form>
      <p>{JSON.stringify(session)}</p>
      <Auth />
    </div>
  );
};

export default Home;

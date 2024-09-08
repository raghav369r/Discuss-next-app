import { ReactNode } from "react";
import { auth } from "@/auth";
import { signIn, signOut } from "@/actions";
import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
  Button,
} from "@nextui-org/react";

type Props = {};

const Header = async (props: Props) => {
  const session = await auth();
  const navBardata: ReactNode = session?.user ? (
    <NavbarItem>
      <form action={signOut}>
        <Button type="submit">
          <Avatar src={session.user.image || ""} />
        </Button>
      </form>
    </NavbarItem>
  ) : (
    <>
      <NavbarItem>
        <form action={signIn}>
          <Button type="submit" color="primary">
            SignUp
          </Button>
        </form>
      </NavbarItem>

      <NavbarItem>
        <form action={signIn}>
          <Button type="submit" color="secondary">
            SignIn
          </Button>
        </form>
      </NavbarItem>
    </>
  );
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>Discuss</NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{navBardata}</NavbarContent>
    </Navbar>
  );
};

export default Header;

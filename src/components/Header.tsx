import {
  NavbarBrand,
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import AuthContent from "./AuthContent";

type Props = {};

const Header = async (props: Props) => {
  return (
    <Navbar>
      <NavbarBrand>Discuss</NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthContent />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

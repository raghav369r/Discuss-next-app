"use client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Provider = (props: Props) => {
  return <NextUIProvider>{props.children}</NextUIProvider>;
};

export default Provider;

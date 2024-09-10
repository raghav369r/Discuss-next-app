"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { useFormStatus } from "react-dom";

type Props = {
  children: React.ReactNode;
};

const FormButton = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" color="primary" isLoading={pending}>
      {props.children}
    </Button>
  );
};

export default FormButton;

// useFormState checks the nearest parent form if it is completed, method used(get/post), data sent

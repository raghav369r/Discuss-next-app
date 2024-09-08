"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Textarea,
  Button,
} from "@nextui-org/react";
import { createTopic } from "@/actions";
import { useFormState } from "react-dom";

type Props = {};

type formDataType = {
  name?: string[];
  description?: string[];
  _formErrors?: string[];
};

const TopicCreateForm = (props: Props) => {
  const [fieldErrors, createTopicAction] = useFormState<formDataType>(
    createTopic,
    {}
  );
  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          action={createTopicAction}
          className="p-4 flex flex-col gap-4 w-80"
        >
          <h1 className="font-semibold text-center">Create a Topic</h1>
          <Input
            label="Name"
            name="topicName"
            labelPlacement="outside"
            placeholder="Name of topic"
            isInvalid={!!fieldErrors?.["name"]?.length}
            errorMessage={fieldErrors?.["name"]?.join(", ")}
          />
          {/* {fieldErrors?.["name"]?.map((msg: string, ind: number) => (
            <DisplayError msg={msg} />
          ))} */}
          <Textarea
            label="Description"
            name="description"
            labelPlacement="outside"
            placeholder="Description of topic"
            isInvalid={!!fieldErrors?.["description"]?.length}
            errorMessage={fieldErrors?.["description"]?.join(", ")}
          />
          {/* {fieldErrors?.["description"]?.map((msg: string, ind: number) => (
            <DisplayError msg={msg} />
          ))} */}

          {fieldErrors?.["_formErrors"]?.map((msg: string, ind: number) => (
            <DisplayError msg={msg} />
          ))}
          <Button type="submit" color="primary">
            Create
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

const DisplayError = ({ msg }: { msg: string }) => {
  return <p className="text-red-700 text-sm">{msg}</p>;
};

export default TopicCreateForm;

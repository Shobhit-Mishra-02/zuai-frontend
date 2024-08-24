"use client";

import { ReactElement } from "react";
import { useFormState, useFormStatus } from "react-dom";
import {
  AiOutlineDelete,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import { disLikeBlog, likeBlog, deleteBlog } from "../_lib/blog";

const ActionButton = ({ text, Icon }: { text: string; Icon: ReactElement }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded ml-2"
    >
      {Icon} {pending ? "wait..." : text}
    </button>
  );
};

interface FormStateInterface {
  error: {
    id?: string[] | undefined;
  };
  message?: undefined;
}

export const LikeBlogButton = ({ id }: { id: string }) => {
  const [state, action] = useFormState(likeBlog, {} as FormStateInterface);
  return (
    <form action={action}>
      <input className="hidden" name="id" value={id} type="text" readOnly />
      <ActionButton text="Like" Icon={<AiOutlineLike className="inline" />} />
    </form>
  );
};

export const DislikeBlogButton = ({ id }: { id: string }) => {
  const [state, action] = useFormState(disLikeBlog, {} as FormStateInterface);
  return (
    <form action={action}>
      <input className="hidden" name="id" value={id} type="text" readOnly />
      <ActionButton
        text="Dislike"
        Icon={<AiOutlineDislike className="inline" />}
      />
    </form>
  );
};

export const DeleteBlogButton = ({ id }: { id: string }) => {
  const [state, action] = useFormState(deleteBlog, {} as FormStateInterface);
  return (
    <form action={action}>
      <input className="hidden" name="id" value={id} type="text" readOnly />
      <button type="submit">
        <AiOutlineDelete className="text-2xl text-gray-500 cursor-pointer" />
      </button>
    </form>
  );
};

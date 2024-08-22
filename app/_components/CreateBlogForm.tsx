"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createBlog } from "../_lib/blog";

interface FormStateInterface {
  error: {
    title?: string[] | undefined;
    content?: string[] | undefined;
  };
  message?: undefined;
}

function CreateBlogSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Posting.." : "Post"}
    </button>
  );
}

function CreateBlogForm() {
  const [state, action] = useFormState(createBlog, {} as FormStateInterface);
  return (
    <form action={action}>
      {state?.message ? state.message : ""}
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter title"
        />
        {state?.error?.title ? state.error.title : ""}
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={6}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter content"
        ></textarea>
        {state?.error?.title ? state.error.title : ""}
      </div>
      <CreateBlogSubmitButton />
    </form>
  );
}

export default CreateBlogForm;

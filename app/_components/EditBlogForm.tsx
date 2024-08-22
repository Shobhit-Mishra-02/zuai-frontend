"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateBlog } from "../_lib/blog";
import { BlogInterface } from "../types";

interface FormStateInterface {
  error: {
    id?: string[] | undefined;
    title?: string[] | undefined;
    content?: string[] | undefined;
  };
  message?: undefined;
}

function EditBlogSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Editing..." : "Edit"}
    </button>
  );
}

function EditBlogForm({ blog }: { blog: BlogInterface }) {
  const [state, action] = useFormState(updateBlog, {} as FormStateInterface);

  return (
    <form action={action}>
      {state.message ? state.message : ""}
      <div className="mb-4">
        <input name="id" value={blog._id} type="text" readOnly />
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={blog.title}
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
          defaultValue={blog.content}
          rows={6}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter content"
        ></textarea>
        {state?.error?.content ? state.error.content : ""}
      </div>
      <EditBlogSubmitButton />
    </form>
  );
}

export default EditBlogForm;

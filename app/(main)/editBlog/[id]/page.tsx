"use server";

import EditBlogForm from "@/app/_components/blog/EditBlogForm";
import { getBlog } from "@/app/_lib/blog";

async function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);
  return (
    <div className="w-[460px] mt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Edit Blog Post</h1>
        <EditBlogForm blog={blog} />
      </div>
    </div>
  );
}

export default EditBlogPage;

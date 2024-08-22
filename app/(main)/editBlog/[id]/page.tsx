import { getBlog } from "@/app/_lib/blog";
import EditBlogForm from "@/app/_components/EditBlogForm";

async function EditBlogPage({ params }: { params: { id: string } }) {
  console.log(params.id);
  const blog = await getBlog(params.id);
  console.log(blog);
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

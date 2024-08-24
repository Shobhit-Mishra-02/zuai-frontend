import CreateBlogForm from "@/app/_components/blog/CreateBlogForm";

function CreateBlogPage() {
  return (
    <div className="w-[460px] mt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create Blog Post</h1>
        <CreateBlogForm />
      </div>
    </div>
  );
}

export default CreateBlogPage;

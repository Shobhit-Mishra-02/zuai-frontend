import BlogCard from "./BlogCard";

function BlogsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Blogs</h1>
      <div className="w-fit space-y-2 mx-auto">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <div className="w-full flex justify-between align-middle pt-4">
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded">
            prev
          </button>
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded">
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;

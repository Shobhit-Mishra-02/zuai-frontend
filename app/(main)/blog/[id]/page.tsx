import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

function BlogPage() {
  return (
    <div className="max-w-lg mt-20">
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-bold mb-2">My First Blog Post</h2>
        <p className="text-gray-500 mb-6">2024-08-18 | John Doe</p>
        <div className="flex justify-end mb-6">
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded">
            <AiOutlineLike className="inline" /> Like
          </button>
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded ml-2">
            <AiOutlineDislike className="inline" /> Dislike
          </button>
        </div>
        <div className="text-gray-700 text-justify">
          This is the content of the blog post. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </div>
      </div>
    </div>
  );
}

export default BlogPage;

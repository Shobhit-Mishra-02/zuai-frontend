import { BiLike } from "react-icons/bi";
import { BlogInterface } from "../../types";
import Link from "next/link";

function BlogCard({ blog }: { blog: BlogInterface }) {
  return (
    <Link href={`/blog/${blog._id}`}>
      <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
        <h3 className="text-lg font-medium">{blog.title}</h3>

        <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
          <BiLike size={20} className="inline-block" />
          <span>{blog.likeCount}</span>
        </p>
      </li>
    </Link>
  );
}

function TopBlogs({ blogs }: { blogs: BlogInterface[] }) {
  return (
    <div className="w-[400px] bg-white rounded-lg border shadow-md">
      <h2 className="text-xl font-bold p-4">Top {blogs.length} Liked Posts</h2>
      <ul className="divide-y divide-gray-200">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default TopBlogs;

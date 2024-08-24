import { BlogInterface } from "../../types";
import moment from "moment";
import Link from "next/link";
import { wrapText } from "../utils/helper";
import { getFullName } from "../utils/helper";

function BlogCard({ blog }: { blog: BlogInterface }) {
  let fullName = getFullName(blog.author.firstName, blog.author.lastName);
  return (
    <div className="max-w-lg bg-white rounded-lg shadow-md border">
      <div className="p-6">
        <Link href={"/blog/" + blog._id}>
          <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
        </Link>
        <p className="text-gray-700 mb-4">{wrapText(blog.content, 200)}</p>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">
            {moment(blog.createdAt).format("MMM Do YY")}
          </p>
          <p className="text-gray-500 text-sm">{fullName}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

import { getBlog } from "@/app/_lib/blog";
import { getUser } from "@/app/_lib/user";
import moment from "moment";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { likeBlog, disLikeBlog } from "@/app/_lib/blog";
import {
  LikeBlogButton,
  DislikeBlogButton,
} from "@/app/_components/ActionButtons";

async function BlogPage({ params }: { params: { id: string } }) {
  const response = await Promise.all([getBlog(params.id), getUser()]);
  const blog = response[0];
  const user = response[1];

  const doesUserLikedBlog = blog.usersLiked.includes(user._id as string)
    ? true
    : false;

  let fullName = blog.author.firstName;

  if (blog.author?.lastName) {
    fullName += " " + blog.author.lastName;
  }

  fullName = fullName.toLocaleUpperCase();

  return (
    <div className="w-[460px] mt-20">
      <div className="p-4 bg-white">
        <div className="like-container flex items-center space-x-1">
          <AiOutlineLike />
          <span className="text-sm text-gray-600 font-medium" id="like-count">
            {blog.likeCount}
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
        <p className="text-gray-500 mb-6">
          {moment(blog.createdAt).format("MMM Do YY")} | {fullName}
        </p>
        <div className="flex justify-end mb-6">
          {doesUserLikedBlog ? (
            <DislikeBlogButton id={blog._id as string} />
          ) : (
            <LikeBlogButton id={blog._id as string} />
          )}
        </div>
        <div className="text-gray-700 text-justify">{blog.content}</div>
      </div>
    </div>
  );
}

export default BlogPage;

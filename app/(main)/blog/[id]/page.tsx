"use server";

import {
  DislikeBlogButton,
  LikeBlogButton,
} from "@/app/_components/ActionButtons";
import { getBlog } from "@/app/_lib/blog";
import { getUser } from "@/app/_lib/user";
import moment from "moment";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { getFullName } from "@/app/_components/utils/helper";

async function BlogPage({ params }: { params: { id: string } }) {
  const response = await Promise.all([getBlog(params.id), getUser()]);
  const blog = response[0];
  const user = response[1];

  const doesUserLikedBlog = blog.usersLiked.includes(user._id as string)
    ? true
    : false;

  let fullName = getFullName(blog.author.firstName, blog.author.lastName);

  return (
    <div className="w-[460px] mt-20">
      <div className="p-4 bg-white">
        <div>
          {user._id === blog.author._id ? (
            <div className="flex justify-end">
              <Link href={`/editBlog/${blog._id}`}>
                <FaRegEdit className="text-2xl text-gray-500 cursor-pointer" />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center space-x-1">
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

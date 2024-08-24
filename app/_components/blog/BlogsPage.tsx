import { BlogInterface } from "../../types";
import BlogCard from "./BlogCard";
import Link from "next/link";

function Pagination({
  currentPageNumber,
  showNextButton,
  showPrevButton,
}: {
  currentPageNumber: number;
  showNextButton: boolean;
  showPrevButton: boolean;
}) {
  return (
    <div className="w-full flex justify-between align-middle pt-4">
      {showPrevButton ? (
        <Link href={`/?page=${currentPageNumber - 1}`}>
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded">
            prev
          </button>
        </Link>
      ) : (
        <div></div>
      )}
      {showNextButton ? (
        <Link href={`/?page=${currentPageNumber + 1}`}>
          <button className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded">
            next
          </button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function BlogsPage({
  blogs,
  currentPageNumber,
  showNextButton,
  showPrevButton,
}: {
  blogs: BlogInterface[];
  currentPageNumber: number;
  showNextButton: boolean;
  showPrevButton: boolean;
}) {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Blogs</h1>
      <div className="w-[460px]  space-y-2 mx-auto">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 text-2xl">
            No blogs found
          </div>
        ) : (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        )}

        {blogs.length ? (
          <Pagination
            currentPageNumber={currentPageNumber}
            showNextButton={showNextButton}
            showPrevButton={showPrevButton}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BlogsPage;

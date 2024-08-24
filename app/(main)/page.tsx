import Navbar from "../_components/Navbar";
import ProfileCard from "../_components/profile/ProfileCard";
import TopBlogs from "../_components/blog/TopBlogs";
import BlogsPage from "../_components/blog/BlogsPage";
import { BiLike } from "react-icons/bi";
import { getBlogPage } from "../_lib/blog";

function getNumberOfPages(totalBlogs: number, limit: number) {
  let numberOfPages = Math.floor(totalBlogs / limit);

  if (totalBlogs % limit) {
    numberOfPages++;
  }

  return numberOfPages;
}

async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}) {
  const page = searchParams?.page ? +searchParams?.page : 1;
  const limit = 2;
  const blogs = await getBlogPage(page, limit);
  const numberOfPages = getNumberOfPages(blogs.totalBlogCount, limit);

  const showPrevButton = page === 1 ? false : true;
  const showNextButton = page === numberOfPages ? false : true;

  return (
    <div>
      <BlogsPage
        blogs={blogs.blogs}
        showNextButton={showNextButton}
        showPrevButton={showPrevButton}
        currentPageNumber={page}
      />
    </div>
  );
}

export default Home;

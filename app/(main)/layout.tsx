import Navbar from "../_components/Navbar";
import ProfileCard from "../_components/ProfileCard";
import TopBlogs from "../_components/TopBlogs";
import { getUser } from "../_lib/user";
import { getTopBlogs } from "../_lib/blog";

async function Layout({ children }: { children: React.ReactNode }) {
  const [userData, getTopBlogsData] = await Promise.all([
    getUser(),
    getTopBlogs(5),
  ]);

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 align-top justify-center items-start">
        <div className="hidden md:block mt-20">
          <ProfileCard user={userData} />
        </div>
        {children}
        <div className="hidden lg:block mt-20">
          <TopBlogs blogs={getTopBlogsData} />
        </div>
      </div>
    </div>
  );
}

export default Layout;

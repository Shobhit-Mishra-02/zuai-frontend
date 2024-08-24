import Navbar from "../_components/Navbar";
import ProfileCard from "../_components/profile/ProfileCard";
import TopBlogs from "../_components/blog/TopBlogs";
import { getUser } from "../_lib/user";
import { getTopBlogs } from "../_lib/blog";
import { checkAuth } from "../_lib/auth";

async function Layout({ children }: { children: React.ReactNode }) {
  await checkAuth();
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

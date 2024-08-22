import Navbar from "../_components/Navbar";
import ProfileCard from "../_components/ProfileCard";
import TopBlogs from "../_components/TopBlogs";
import { getUser } from "../_lib/user";

async function Layout({ children }: { children: React.ReactNode }) {
  const data = await getUser();

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 align-top justify-center items-start">
        <div className="hidden md:block mt-20">
          <ProfileCard user={data} />
        </div>
        {children}
        <div className="hidden lg:block mt-20">
          <TopBlogs />
        </div>
      </div>
    </div>
  );
}

export default Layout;

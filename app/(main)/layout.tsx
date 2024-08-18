import Navbar from "../_components/Navbar";
import ProfileCard from "../_components/ProfileCard";
import TopBlogs from "../_components/TopBlogs";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {/* <h1 className="text-3xl font-bold text-center mt-8 mb-4">Blogs</h1> */}
      <div className="flex gap-4 align-top justify-center items-start">
        <div className="hidden md:block mt-20">
          <ProfileCard />
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

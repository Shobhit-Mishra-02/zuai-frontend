import ProfileForm from "@/app/_components/ProfileForm";
import { getUser } from "@/app/_lib/user";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="w-[460px] mt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
        <ProfileForm user={user} />
      </div>
    </div>
  );
}

export default ProfilePage;

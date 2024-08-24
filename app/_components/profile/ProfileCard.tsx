import { UserInterface } from "../../types";
import Link from "next/link";

function ProfileCard({ user }: { user: UserInterface }) {
  let fullName = user.firstName;

  if (user.lastName) {
    fullName += " " + user.lastName;
  }

  return (
    <div className="w-[400px] bg-white rounded-lg shadow-md border">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{fullName}</h2>
        <p className="text-gray-700 mb-4">{user.email}</p>
        <p className="text-gray-700 mb-4 text-justify">
          <span className="font-semibold text-gray-700">Bio</span>
          <br />
          {user.bio}
        </p>
        <div className="flex pt-4">
          <Link href={"/profile"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

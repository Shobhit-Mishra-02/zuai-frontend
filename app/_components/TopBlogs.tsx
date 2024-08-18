import { BiLike } from "react-icons/bi";

function TopBlogs() {
  return (
    <div className="max-w-md bg-white rounded-lg border shadow-md">
      <h2 className="text-xl font-bold p-4">Top 5 Liked Posts</h2>
      <ul className="divide-y divide-gray-200">
        <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
          <h3 className="text-lg font-medium">How to create the best blog</h3>
          <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
            <BiLike size={20} className="inline-block" />
            <span>100</span>
          </p>
        </li>
        <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
          <h3 className="text-lg font-medium">How to create the best blog</h3>
          <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
            <BiLike size={20} className="inline-block" />
            <span>100</span>
          </p>
        </li>
        <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
          <h3 className="text-lg font-medium">How to create the best blog</h3>
          <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
            <BiLike size={20} className="inline-block" />
            <span>100</span>
          </p>
        </li>
        <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
          <h3 className="text-lg font-medium">How to create the best blog</h3>
          <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
            <BiLike size={20} className="inline-block" />
            <span>100</span>
          </p>
        </li>
        <li className="flex justify-between p-4 cursor-pointer hover:shadow-md">
          <h3 className="text-lg font-medium">How to create the best blog</h3>
          <p className="text-gray-500 flex justify-center align-middle gap-1 items-center ml-6">
            <BiLike size={20} className="inline-block" />
            <span>100</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default TopBlogs;

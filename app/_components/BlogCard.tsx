function BlogCard() {
  return (
    <div className="max-w-lg bg-white rounded-lg shadow-md border">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">Blog Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm">
            Created at: 2023-11-24T12:00:00Z
          </p>
          <p className="text-gray-500 text-sm">James Bond</p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

function ProfileCard() {
  return (
    <div className="w-[400px] bg-white rounded-lg shadow-md border">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-700 mb-4">john.doe@example.com</p>
        <p className="text-gray-700 mb-4 text-justify">
          Bio: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, sit? Dicta, praesentium recusandae magni, culpa facere
          iure at reiciendis saepe illo, asperiores officia vero eos fuga odio
          eum voluptatem esse.
        </p>
        <div className="flex pt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

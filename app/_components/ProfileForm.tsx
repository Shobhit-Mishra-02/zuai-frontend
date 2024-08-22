"use client";

import { UserInterface } from "../types";
import { useFormState } from "react-dom";
import { updateUser } from "../_lib/user";
import { useFormStatus } from "react-dom";

function ProfileSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {pending ? "Updating..." : "Update Profile"}
    </button>
  );
}

interface FormStateInterface {
  error: {
    id?: string[] | undefined;
    email?: string[] | undefined;
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
    bio?: string[] | undefined;
  };
  message?: undefined;
}

function ProfileForm({ user }: { user: UserInterface }) {
  const [state, action] = useFormState(updateUser, {} as FormStateInterface);

  return (
    <form action={action}>
      <div className="mb-4">
        {state.message ? state.message : ""}
        <input
          name="id"
          type="text"
          className="hidden"
          value={user._id}
          readOnly
        />
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={user.email}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter email"
        />
        {state.error?.email ? state.error.email : ""}
      </div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          defaultValue={user.firstName}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter first name"
        />
        {state.error?.firstName ? state.error.firstName : ""}
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          defaultValue={user.lastName ? user.lastName : ""}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter last name"
        />
        {state.error?.lastName ? state.error.lastName : ""}
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          defaultValue={user.bio ? user.bio : ""}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter bio"
          rows={6}
        ></textarea>
        {state.error?.bio ? state.error.bio : ""}
      </div>
      <ProfileSubmitButton />
    </form>
  );
}

export default ProfileForm;

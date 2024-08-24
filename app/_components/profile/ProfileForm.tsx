"use client";

import { UserInterface } from "../../types";
import { useFormState } from "react-dom";
import { updateUser } from "../../_lib/user";
import { useFormStatus } from "react-dom";
import SubmitButton from "../utils/SubmitButton";

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
      {state.message ? (
        state.message.includes("success") ? (
          <p className="text-sm text-green-700 pb-1">{state.message}</p>
        ) : (
          <p className="text-sm text-red-500 pb-1">{state.message}</p>
        )
      ) : (
        ""
      )}
      <div className="mb-4">
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
        {state.error?.email ? <p>{state.error.email}</p> : ""}
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
        {state.error?.firstName ? <p>{state.error.firstName}</p> : ""}
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
        {state.error?.lastName ? <p>{state.error.lastName}</p> : ""}
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
        {state.error?.bio ? <p>{state.error.bio}</p> : ""}
      </div>
      <SubmitButton text="Update Profile" />
    </form>
  );
}

export default ProfileForm;

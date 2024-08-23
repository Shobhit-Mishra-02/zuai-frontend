"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { signup } from "../../_lib/auth";
import SubmitButton from "../utils/SubmitButton";

interface FormStateInterface {
  error: {
    email?: string[] | undefined;
    password?: string[] | undefined;
    confirmPassword?: string[] | undefined;
    firstName?: string[] | undefined;
    lastName?: string[] | undefined;
  };
  message?: undefined;
}

function SignupForm() {
  const [state, action] = useFormState(signup, {} as FormStateInterface);
  return (
    <form action={action}>
      {state?.message ? (
        <p className="text-sm text-red-500 pb-1">{state.message}</p>
      ) : (
        ""
      )}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
        />
        {state?.error?.email ? (
          <p className="text-sm text-red-500 pb-1">{state.error.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your password"
        />
        {state?.error?.password ? (
          <p className="text-sm text-red-500 pb-1">{state.error.password}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Confirm your password"
        />
        {state?.error?.confirmPassword ? (
          <p className="text-sm text-red-500 pb-1">
            {state.error.confirmPassword}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
        {state?.error?.firstName ? (
          <p className="text-sm text-red-500 pb-1">{state.error.firstName}</p>
        ) : (
          ""
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
        {state?.error?.lastName ? (
          <p className="text-sm text-red-500 pb-1">{state.error.lastName}</p>
        ) : (
          ""
        )}
      </div>
      <div>
        <p>
          already have an account{" "}
          <span className="text-blue-500 underline">
            <Link href={"/"}>click here</Link>
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <SubmitButton text="Signup" />
      </div>
    </form>
  );
}

export default SignupForm;

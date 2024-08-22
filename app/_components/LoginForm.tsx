"use client";

import { login } from "../_lib/auth";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import Link from "next/link";

interface FormStateInterface {
  error: {
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  message?: undefined;
}

function LoginSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {pending ? "Wait..." : "Login"}
    </button>
  );
}

function LoginForm() {
  const [state, action] = useFormState(login, {} as FormStateInterface);

  return (
    <form action={action}>
      {state?.message ? state.message : ""}
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
        {state?.error?.email ? state.error.email : ""}
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
        {state?.error?.password ? state.error.password : ""}
      </div>
      <div>
        <p>
          don&apos;t have account{" "}
          <span className="text-blue-500 underline">
            <Link href={"/signup"}>click here</Link>
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between pt-4">
        <LoginSubmitButton />
      </div>
    </form>
  );
}

export default LoginForm;

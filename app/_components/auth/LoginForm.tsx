"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { login } from "../../_lib/auth";
import SubmitButton from "../utils/SubmitButton";

interface FormStateInterface {
  error: {
    email?: string[] | undefined;
    password?: string[] | undefined;
  };
  message?: undefined;
}

function LoginForm() {
  const [state, action] = useFormState(login, {} as FormStateInterface);

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
          required
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
          required
        />
        {state?.error?.password ? (
          <p className="text-sm text-red-500 pb-1">{state.error.password}</p>
        ) : (
          ""
        )}
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
        <SubmitButton text="Login" />
      </div>
    </form>
  );
}

export default LoginForm;

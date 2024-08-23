"use client";
import { useFormStatus } from "react-dom";
import { WhiteSpinner } from "./Spinner";

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      disabled={pending}
    >
      {pending ? <WhiteSpinner /> : text}
    </button>
  );
}

export default SubmitButton;

"use client";
import { LuLoader2 } from "react-icons/lu";

export function DarkSpinner() {
  return (
    <LuLoader2 className="text-6xl text-gray-900 animate-spin h-auto w-8" />
  );
}

export function WhiteSpinner() {
  return <LuLoader2 className="text-6xl text-white animate-spin h-auto w-8" />;
}

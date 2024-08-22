import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "../_components/LoginForm";

function LoginPage() {
  const cokkieStorage = cookies();

  if (cokkieStorage.get("session")?.value) {
    redirect("/");
  }
  return (
    <div className="w-full h-[100vh] flex justify-center align-middle items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm h-fit border">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;

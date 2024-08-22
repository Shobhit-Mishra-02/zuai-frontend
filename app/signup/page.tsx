import SignupForm from "../_components/SignupForm";

function SignupPage() {
  return (
    <div className="w-full h-[100vh] flex justify-center align-middle items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm border">
        <h2 className="text-2xl font-bold mb-6">Signup</h2>
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;

import Link from "next/link";
export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Sign in to continue with SKL
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-6 p-3 rounded-xl bg-black border border-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-4 p-3 rounded-xl bg-black border border-gray-700"
        />

        <Link
  href="/dashboard"
  className="block w-full mt-6 bg-white text-black py-3 rounded-xl font-semibold hover:scale-105 transition text-center"
>
  Sign In
</Link>

        <p className="text-center text-gray-400 mt-4 text-sm">
          New here? Create account
        </p>

      </div>

    </main>
  );
}

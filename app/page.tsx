import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full top-20 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full bottom-20 right-10 animate-pulse"></div>

      <p className="text-sm uppercase tracking-[0.4em] text-gray-400 z-10">
        Skills • Knowledge • Learning
      </p>

      <h1 className="text-7xl md:text-9xl font-bold mt-4 z-10">
        SKL
      </h1>

      <p className="mt-6 text-xl text-gray-300 text-center max-w-2xl leading-relaxed z-10">
        Learn math with hints, not answers.
      </p>

      <div className="mt-10 flex gap-4 z-10">

        <Link
          href="/login"
          className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
        >
          Get Started
        </Link>

        <button className="border border-gray-600 px-7 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300">
          Learn More
        </button>

      </div>

    </main>
  );
}

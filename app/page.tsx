import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome</h1>
      <p>This is your home screen.</p>

      <Link href="/login">
        <button style={{ marginTop: 20 }}>Go to Login</button>
      </Link>
    </div>
  );
}

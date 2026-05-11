import Link from "next/link";

export default function Dashboard() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>

      <div style={{ marginTop: 20 }}>
        <Link href="/dashboard/assignments">
          <button>Assignments</button>
        </Link>

        <Link href="/dashboard/ai" style={{ marginLeft: 10 }}>
          <button>AI Tutor</button>
        </Link>
      </div>
    </div>
  );
}

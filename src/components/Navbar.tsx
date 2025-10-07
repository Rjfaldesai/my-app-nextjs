import Link from "next/link";
/*Used only for PageRouter*/
export default function Navbar() {
  return (
    <nav style={{ padding: "40px", borderBottom: "1px solid #ccc" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/posts">Static Posts</Link> |{" "}
      <Link href="/server-time">Server Time</Link>{" "}|
      <Link href="/server-time-clock">Server Time Clock (using API)</Link>
      
    </nav>
  );
}

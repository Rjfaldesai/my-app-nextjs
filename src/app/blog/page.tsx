import Link from "next/link";

const posts = [
  { slug: "nextjs-intro", title: "Intro to Next.js" },
  { slug: "ssg-vs-ssr", title: " SSG vs SSR" },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog List:</h1><br></br>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { GetStaticProps } from "next";

interface Post {
  id: number;
  title: string;
}

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <h1>Static Posts (SSG)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: Post[] = await res.json();

  return { props: { posts } };
};

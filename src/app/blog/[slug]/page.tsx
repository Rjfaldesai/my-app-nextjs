interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is a dynamically generated blog post page.</p>
    </div>
  );
}

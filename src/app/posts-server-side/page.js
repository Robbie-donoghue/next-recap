export default async function Page() {
  let res = await fetch(`/api/posts`);
  const posts = await res.json();
  return (
    <div>
      {posts.map((post) => (
        <div>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}

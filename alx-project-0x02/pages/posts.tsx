import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

const Posts  : React.FC = () => {
   const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();

        // Map API response to PostProps structure
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mappedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          content: post.body,
        }));

        setPosts(mappedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>

        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostCard
                    key={post.id}
                    title={post.title}
                    content={post.content}
                    userId={post.userId} id={0}              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
export default Posts;

import { GetStaticProps } from "next";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import { PostsPageProps } from "@/interfaces";


export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>

        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId} id={0}            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mappedPosts: PostProps[] = data.map((post: any) => ({
      userId: post.userId,
      id: post.id,
      title: post.title,
      content: post.body,
    }));

    return {
      props: {
        posts: mappedPosts,
      },
      revalidate: 60, // re-build page at most every 60s
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return {
      props: {
        posts: [],
      },
    };
  }
};

import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";
import Header from "@/components/layout/Header";

const Home : React.FC = ({}) => {
    const [posts, setPosts] = useState<CardProps[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddPost = (post: CardProps) => {
    setPosts((prev) => [post, ...prev]);
  };
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto p-4">
                <header className="">
                  <Header/>
                  <h1 className="">Home Page</h1>
                </header>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="1st Card" content="this is the 1st Card content"/>
                <Card title="2nd Card" content="and the 2nd Card content"/>
                <Card title="3rd Card" content="the third card content"/>
                </div>
                <div className="p-6">
                <button
                 onClick={() => setIsModalOpen(true)} 
                 className="mb-6 px-4 py-2 rounded-lg bg-green-600 text-white">
                 + New Post
                 </button>
                 <PostModal isOpen={isModalOpen}
                 onClose={()=>setIsModalOpen(false)}
                 onSave={handleAddPost}/>
                </div>
                 <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet. Add one!</p>
        ) : (
          posts.map((post, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="mt-2 text-gray-700">{post.content}</p>
            </div>
          ))
        )}
      </div>
            </main>
        </div>
    )
}
export default Home;
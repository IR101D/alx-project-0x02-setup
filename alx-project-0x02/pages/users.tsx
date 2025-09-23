import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";

const Users : React.FC = () => {
      const [users, setUsers] = useState<UserProps[]>([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        async function fetchPosts() {
          try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mappedUsers: UserProps[] = data.map((user: any) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              address: user.address,
            }));
    
            setUsers(mappedUsers);
          } catch (error) {
            console.error("Error fetching users:", error);
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
            {users.map((user) => (
              <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    address={user.address} id={0} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
export default Users;
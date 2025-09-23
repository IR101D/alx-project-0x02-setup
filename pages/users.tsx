import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import { UsersPageProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";


export default function PostsPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
            <div className="grid gap-4">
            {users.map((user) => (
              <UserCard
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    address={user.address} id={0} />
            ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mappedUsers: UserProps[] = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    }));

    return {
      props: {
        users: mappedUsers,
      },
      revalidate: 60, // re-build page at most every 60s
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    return {
      props: {
        users: [],
      },
      revalidate: 60,
    };
  }
};

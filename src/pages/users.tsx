// pages/users.tsx
import { GetServerSideProps } from "next";
import { useState } from "react";
interface UsersPageProps {
  users: string[];
}

export default function UsersPage({ users }: UsersPageProps) {

  const [name, setName] = useState("");
  const [list, setList] = useState(users);

  const addUser = async () => {
    if (!name.trim()) return;

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    if (res.ok) {
      setList(data.users); // update local state
      setName(""); // reset input
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div>
      <div className="card">
        <h1>Users List</h1>
        <ul>
        {list.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
        </ul>
      </div>
    <div className="card">
      <h2>Add User</h2>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      /><br></br><br></br>
      <button onClick={addUser}>Add</button>
      </div>
    </div>

  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("/api/users");
  const users = await res.json();
  return { props: { users } };
};

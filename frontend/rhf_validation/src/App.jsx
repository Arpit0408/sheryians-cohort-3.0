import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Usercard from "./components/Usercard";

function App() {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const handleDelete = (id) => {
    const filteredUser = users.filter((u) => u.id !== id);
    setUsers(filteredUser);
    // localStorage.setItem("users", JSON.stringify(filteredUser));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  const [editUser, setEditUser] = useState(null);
  console.log("edituserdata", editUser);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      <Navbar setToggle={setToggle} />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        {toggle ? (
          <Form
            setToggle={setToggle}
            setUsers={setUsers}
            users={users}
            editUser={editUser}
            setEditUser={setEditUser}
          />
        ) : (
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {users.map((user, index) => {
              return (
                <Usercard
                  key={index}
                  setToggle={setToggle}
                  setUsers={setUsers}
                  setEditUser={setEditUser}
                  user={user}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

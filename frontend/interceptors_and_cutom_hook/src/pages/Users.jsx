import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";
const Users = () => {
  const [Users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const getUsers = async () => {
    const res = await axiosInstance.get("/users");
    console.log("jhdgsajkfhjdshkjlf", res.data);
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {Users?.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;

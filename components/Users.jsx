"use client"; //se le indica al servidor que el codigo de javascript utilizado es codigo de cliente, para que lo pueda entender el servidor
import React from "react";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.email}
            style={{ width: "120px", borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users;

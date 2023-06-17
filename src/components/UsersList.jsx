import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = ({ setActiveUserId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();

  //   useEffect(() => {
  //     axios("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => setUsers(res.data))
  //       .catch((error) => console.log(error)).finally(setLoading(false))
  //   }, []);

  const getUsers = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  //   console.log(users);
  return (
    <div>
      <h2>Users</h2>
      <hr />
      {loading && <h1>Loading...</h1>}
      <ul className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <li onClick={() => setActiveUserId(user.id)}>
              <h3>{user.name}</h3>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

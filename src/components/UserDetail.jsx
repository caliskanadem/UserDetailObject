import axios from "axios";
import React, { useEffect, useState } from "react";

const UserDetail = ({ activeUserId }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const getDetail = async () => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${activeUserId}`
      );
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetail();
  }, [activeUserId]);

  return (
    <div>
      <h2>Details</h2>
      <hr />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      )}
    </div>
  );
};

export default UserDetail;

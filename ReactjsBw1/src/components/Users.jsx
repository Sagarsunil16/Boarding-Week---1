import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong");
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Error: {error.message}</p>}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/details/${user.id}`} >{user.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;

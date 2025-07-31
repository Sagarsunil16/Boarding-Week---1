import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
    const navigate = useNavigate()
  const params = useParams();
  const id = params.id;
  console.log(id);
  const [userDetails, setUserDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(response);
      setUserDetails(response.data);
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
  console.log(userDetails);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>Error: {error.message}</p>}
      {!loading && userDetails && (
        <div>
          <h2>{userDetails.name}</h2>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
        </div>
      )}
      <div>
        <button onClick={()=>navigate('/')} >Go Back</button>
      </div>
    </div>
  );
};

export default UserDetails;

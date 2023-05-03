import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

export const Profile = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://equityapi.groupfund.me/api/v1.1/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        setUser(res.data.data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.replace("/");
  }
  console.log(user, "users");

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {user.firstName}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="profile-details">
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

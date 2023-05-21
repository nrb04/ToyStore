import React, { useContext, useEffect, useState } from "react";
import AuthPovider from "../../AuthProvider/AuthProvider";

const Profile = () => {
  // Filter toys based on the email
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthPovider);

  useEffect(() => {
    fetch(`http://localhost:5000/data/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return;
  <div></div>;
};

export default Profile;

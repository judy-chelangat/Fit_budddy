import React, { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill in both email and password fields.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "You have successfully logged in.",
      });

      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form-login" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            value={email}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            placeholder="******"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;

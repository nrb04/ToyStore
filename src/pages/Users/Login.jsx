import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email === "" || password === "") {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    setError(""); // Resetting the error state

    login(email, password)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError("Invalid email or password.");
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        {error && <p className="">{error}</p>}
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="">
          <div className="">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label>Remember me</label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          not a member{" "}
          <Link className="nav-link" to="/signup">
            SignUp
          </Link>
        </p>
      </form>

      <button onClick={handleGoogleLogin} className="" type="submit">
        Google Login
      </button>
    </div>
  );
};

export default Login;

import React, { useContext } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Full name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label>photo Url</label>
          <input
            name="photo"
            type="text"
            className="form-control"
            placeholder="Photo Url"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-5">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid mb-5">
          <button type="submit" className="btn btn-danger">
            Sign Up
          </button>
        </div>
        <hr />
        <p className="forgot-password text-right">
          Already registered{" "}
          <Link className="nav-link" to="/signin">
            SignIn
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
//  <div id="regibody">
//       <div className="container-fluid px-1 py-5 mx-auto">
//         <Row className="d-flex justify-content-center">
//           <Col xl={4} lg={4} md={9} col={10} className="text-center">
//             <h3>Registration</h3>
//             <div className="card">
//               {" "}
//               <form onSubmit={handleRegister}>
//                 <div className="mb-3">
//                   <label>Full name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="form-control"
//                     placeholder="First name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label>photo Url</label>
//                   <input
//                     name="photo"
//                     type="text"
//                     className="form-control"
//                     placeholder="Photo Url"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label>Email address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                   />
//                 </div>
//                 <div className="mb-5">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="form-control"
//                     placeholder="Enter password"
//                   />
//                 </div>

//                 <div className="d-grid mb-5">
//                   <button type="submit" className="btn btn-danger">
//                     Sign Up
//                   </button>
//                 </div>
//                 <hr />
//                 <p className="forgot-password text-right">
//                   Already registered{" "}
//                   <Link className="nav-link" to="/signin">
//                     SignIn
//                   </Link>
//                 </p>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </div>

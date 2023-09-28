// // src/LoginPage.js

import React from 'react';
import './LoginPage.css'; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div >
          <button className="text-center" type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
// src/LoginPage.js

// import React from 'react';
// import './LoginPage.css'; // Custom CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// function LoginPage() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <button type="submit" className="btn btn-green">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
// src/LoginPage.js

// import React from 'react';
// import './LoginPage.css'; // Custom CSS
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

// function LoginPage() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input type="email" className="form-control" id="email" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input type="password" className="form-control" id="password" />
//           </div>
//           <button type="submit" className="btn btn-green">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


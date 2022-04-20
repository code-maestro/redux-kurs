import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import "./Login.css";

const Login = () => {    
  const dispatch = useDispatch();
  const handleLogin = (e) => {
      e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <div className="modal">
      <h2 className="modal_txt"> Login  </h2>
      <div className="modal_content">
        <form action="" onSubmit={handleLogin}>
          <div className="modal_cart_details">
            <input className="cart_summary" type='text' name="username" placeholder="Names" />
            <input className="cart_summary" type='password' name="password" placeholder="Password"/>
            <div className="buttons">
              <button className="keep_btn" height="40" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

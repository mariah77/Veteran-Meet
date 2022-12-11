import "./login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="wrapper-login">
        <div className="left-login">
          <h3 className="logo-login">VeteranMeet</h3>
          <span className="description">
          Connect with Veterans and engage in Community Service
          </span>
        </div>
        <div className="right-login">
          <div className="box-login">
            <input placeholder="Email" className="input-login" />
            <input placeholder="Password" className="input-login" />
            <button className="button-login">Log In</button>
            <span className="forgot-login">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
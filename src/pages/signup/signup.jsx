import "./signup.css";

export default function SignUp() {
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
          <h3 className="logo-box">Register Account</h3>
            <input placeholder="UserName" className="input-login" />
            <input placeholder="Email" className="input-login" />
            <input placeholder="Password" className="input-login" />
            <input placeholder="Profession" className="input-login" />
             
             <div className="hobby">
             <label className="checkbox-text">Select Hobbies</label>
            <div class="input-group mb-3">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="" /><div className="checkbox-text">Tree Plantation</div>
            </div>
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="" /><div className="checkbox-text">Book Reading</div>
            </div>
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="" /><div className="checkbox-text">Old Home Visit</div>
            </div>
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" value="" /><div className="checkbox-text">Hospital Visits</div>
            </div>
            </div>
            </div>

            <button className="button-login">SignUp</button>
            <button className="button-login">Already have an account?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
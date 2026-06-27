import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-card">

        <div className="welcome-content">
          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit.
          </p>

          <button
            className="create-btn"
            onClick={() => navigate("/signup")}
          >
            Create Account
          </button>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default Welcome;
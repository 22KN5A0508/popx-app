function Signup() {
  return (
    <div style={{ padding: "30px", maxWidth: "350px", margin: "auto" }}>
      <h1>
        Create your <br /> PopX account
      </h1>

      <input
        type="text"
        placeholder="Full Name"
        style={{ width: "100%", padding: "12px", marginTop: "20px", marginBottom: "15px" }}
      />

      <input
        type="text"
        placeholder="Phone Number"
        style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
      />

      <input
        type="email"
        placeholder="Email Address"
        style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
      />

      <input
        type="text"
        placeholder="Company Name"
        style={{ width: "100%", padding: "12px", marginBottom: "20px" }}
      />

      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "#6C25FF",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
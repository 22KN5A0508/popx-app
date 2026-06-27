function Login() {
  return (
    <div style={{ padding: "30px", maxWidth: "350px", margin: "auto" }}>
      <h1>
        Signin to your <br /> PopX account
      </h1>

      <p style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <input
        type="email"
        placeholder="Email Address"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          marginBottom: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
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
        Login
      </button>
    </div>
  );
}

export default Login;
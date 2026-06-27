function Profile() {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Account Settings</h2>

      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            marginRight: "15px",
          }}
        />

        <div>
          <h3>Marry Doe</h3>
          <p>marrydoe@gmail.com</p>
        </div>
      </div>

      <p style={{ marginTop: "20px", color: "gray" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
        Magna Aliquyam Erat.
      </p>
    </div>
  );
}

export default Profile;
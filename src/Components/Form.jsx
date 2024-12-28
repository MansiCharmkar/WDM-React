import { useState } from "react";

const formStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  marginTop: "12rem",
  backgroundColor: "yellow",
  color: "black",
  fontWeight: "bold",
  height: "100%",
  width: "fit-content",
  borderRadius: "1rem",
};

const inputStyle = {
  padding: "0.5rem",
};
const btnStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "1rem",
  paddingBottom: "2rem",
};
const submitBtnStyle = {
  padding: "0.5rem",
  border: "none",
  borderRadius: "8px",
};
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your form is submitted :- your name is "${name}", your email "${email}" and your password "${password}"`
    );
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div style={inputStyle}>
          Name :-{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <h3>{name}</h3>
        </div>
        <div style={inputStyle}>
          Email :-{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h3>{email}</h3>
        </div>
        <div style={inputStyle}>
          Password :-{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <h3>{password}</h3>
        </div>
        <div style={btnStyle}>
          <button style={submitBtnStyle}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

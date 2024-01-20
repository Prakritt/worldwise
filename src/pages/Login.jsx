import { useNavigate } from "react-router-dom";
import PageNav from "../components /PageNav";
import { useAuth } from "../contexts /AuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import Button from "../components /Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("prakrit@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    }
  }

  useEffect(
    function () {
      if (isLoggedIn) {
        navigate("/app", { replace: true });
      }
    },
    [isLoggedIn, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary" onClick={handleClick}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}

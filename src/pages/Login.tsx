import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState } from "react";
import Button from "../components/Button";
import useLogin from "../features/authentication/useLogin";
export default function Login() {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("123456789");
  const { login, isLoginingIn } = useLogin();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // these function lead to isAuthenticated => true
    if (email && password)
      login(
        { email, password },
        {
          onSettled: () => {
            setEmail("");
            setPassword("");
          },
        },
      );
  }

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoginingIn}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoginingIn}
          />
        </div>

        <div>
          <Button type="primary" disabled={isLoginingIn}>
            Login
          </Button>
        </div>
      </form>
    </main>
  );
}

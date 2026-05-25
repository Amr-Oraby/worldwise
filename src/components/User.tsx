import styles from "./User.module.css";
import useLogout from "../features/authentication/useLogout";
import useUser from "../features/authentication/useUser";
import { supabase } from "../services/supbase";

function User() {
  const { user, isLoading } = useUser();
  const { user_metadata } = user ?? {};
  const { name, avatar } = user_metadata ?? {};
  const { logout, isLoginingOut } = useLogout();

  const avatarUrl = avatar
    ? supabase.storage.from("avatars").getPublicUrl(avatar).data.publicUrl
    : "#";

  function handleLogout() {
    logout();
  }
  return (
    <div className={styles.user}>
      <img src={avatarUrl} alt={name} />
      <span>Welcome, {name}</span>
      <button onClick={handleLogout} disabled={isLoading || isLoginingOut}>
        Logout
      </button>
    </div>
  );
}

export default User;

/*
CHALLENGE

1) Add `AuthProvider` to `App.jsx`
2) In the `Login.jsx` page, call `login()` from context
3) Inside an effect, check whether `isAuthenticated === true`. If so, programatically navigate to `/app`
4) In `User.js`, read and display logged in user from context (`user` object). Then include this component in `AppLayout.js`
5) Handle logout button by calling `logout()` and navigating back to `/`
*/

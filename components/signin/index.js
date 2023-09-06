import Image from "next/image";
import Styles from "../../styles/Login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function SignIn() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log("User Details", user);
  };

  return (
    <>
      <div className={Styles.wrapper}>
        <div className={Styles.formContent}>
          <h1 className={Styles.active}>Sign In</h1>

          {/*------------- Icon-------------- */}
          <div>
            <Image
              src={"/LoginIcon.png"}
              width={300}
              height={250}
              id="image"
              alt="User"
            />
          </div>
          {/*------------- Icon-------------- */}

          <form onSubmit={handleSubmit}>
            <div>
              <input
                className={Styles.InputFields}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className={Styles.InputFields}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit" variant="contained" sx={{ m: 3 }}>
                Submit
              </Button>
            </div>
            <div>
              <a className={Styles.signUPLInk} href="/signup">
                Dont have an account SIGNUP 👇🏻
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

import Styles from "../../styles/Register.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import { object, string } from "yup";

let userSchema = object({
  name: string().required("name is required"),
  mobile: string()
    .required("mobile is required")
    .matches(/^[0-9]{10}$/, "mobile must be 10 degit"),
  email: string().required("email is required"),
  password: string()
    .required("password is required")
    .matches(/^[a-z]{6}gi$/, "password must be have this things"),
});

export default function SignIn() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handlePassword = () => {
    setShow(!show);
  };

  return (
    <>
      <Container
        sx={{
          width: 500,
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ padding: "1rem" }}>
          <h1 className={Styles.active}>Sign Up</h1>
          <Formik
            initialValues={{
              name: "",
              mobile: "",
              email: "",
              password: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values) => {
              console.log("User: ", values);
            }}
          >
            {({
              values: user,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2} margin={2}>
                  <Grid item xs={12} md={5}>
                    <TextField
                      fullWidth
                      type="text"
                      name="name"
                      value={user.name}
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors?.name && touched?.name ? true : false}
                      helperText={touched?.name && errors?.name}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <TextField
                      fullWidth
                      type="number"
                      name="mobile"
                      value={user.mobile}
                      placeholder="Mobile"
                      error={errors?.mobile && touched?.mobile ? true : false}
                      helperText={touched?.mobile && errors?.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <TextField
                      fullWidth
                      type="email"
                      name="email"
                      value={user.email}
                      placeholder="Email"
                      error={errors?.email && touched?.email ? true : false}
                      helperText={touched?.email && errors?.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={show ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handlePassword}
                              edge="end"
                            >
                              {show ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        name="password"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ m: "auto" }}>
                    <Button type="submit" variant="contained">
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Card>
      </Container>
    </>
  );
}

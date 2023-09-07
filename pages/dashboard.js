import Image from "next/image";
import Styles from "../styles/Product.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const DashBoard = (props) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/signin");
  };

  console.log(props);
  return (
    <>
      <Button
        variant="contained"
        className={Styles.Logout}
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div className={Styles.container}>
        {props.data.map((user, i) => {
          return (
            <div className={Styles.product} key={i}>
              <Image
                className={Styles.productImage}
                src={user.image}
                width={250}
                height={200}
                alt="product image"
              />
              <h2>{user.category}</h2>
              <h5 className={Styles.price}> ₹ {user.price}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch("https://fakestoreapi.com/products")).json();
  return {
    props: {
      data,
    },
  };
};

export default DashBoard;

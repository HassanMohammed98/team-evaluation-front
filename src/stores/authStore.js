import { makeAutoObservable } from "mobx";
import instance from "./instance";
import { Navigate } from "react-router-dom";
// import jwt-decode to check the token:
// import decode from "jwt-decode";
// import AsyncStorage from "@react-native-async-storage/async-storage";

//! make sure of the code ::
// make auth store - sign up - sign in:
class AuthStore {
  // make empty obj :
  user = null;

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  // signup methods:
  signup = async (userData, navigate) => {
    let editUserData = JSON.stringify(userData);
    editUserData = editUserData
      .split(":")
      .join("=")
      .replace(/["{}]/g, "")
      .split(",")
      .join("&");
    try {
      const res = await instance.post("/auth/users/", editUserData);
      console.log("AuthStore -> signup -> res.data.token", res.data);
      await this.signin(userData, navigate);
      //   const test = await res.json();
      //   await this.setUser(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  // * sign in method:
  signin = async (userData, navigate) => {
    let editUserData = JSON.stringify(userData);
    editUserData = editUserData
      .split(":")
      .join("=")
      .replace(/["{}]/g, "")
      .split(",")
      .join("&");
    try {
      const resToken = await instance.post("/auth/jwt/create/", editUserData);
      console.log("AuthStore -> signin -> res.data.token", resToken.data);
      this.setUser(resToken.data.access);
      await navigate("/");
    } catch (error) {
      if (error.message.includes("401")) {
        // toast.show({
        //   description: "Check Username or Password",
        // });
      }
    }
  };

  setUser = async (token) => {
    // const navigate = useNavigate();

    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const res = await instance.get("/auth/users/me/");
    this.user = res.data;
    console.log(this.user);
    // return <Navigate to="/" />;
    // if (reg === "signin") {
    //   navigation.navigate("Home");
    // }
    // toast.show({
    //   description: "Signed In",
    // });
  };

  // * signout method:
  signout = async (navigate) => {
    // if (this.user === null) {
    //   console.log("user is not signed in");
    // } else {
    localStorage.removeItem("myToken");
    this.user = null;
    if (navigate) {
      await navigate("/signin");
    }
    //   await AsyncStorage.removeItem("token");
    //   navigation.navigate("Registration");
    //   toast.show({
    //     description: "Signed Out",
    //   });
    // }
  };

  isTokenValid(Data) {
    if (Data.code && Data.code === "token_not_valid") {
      alert("Please login again");
      return false;
    } else {
      return true;
    }
  }

  checkForToken = async () => {
    const token = await localStorage.getItem("myToken");
    if (token) {
      try {
        const tokenVerify = { token: token };
        console.log(tokenVerify);
        const res = await instance.post("/auth/jwt/verify/", tokenVerify);
        console.log(res);
        const verify = this.isTokenValid(res);
        if (verify) {
          console.log("this verify test...", verify);
          this.setUser(token);
        } else {
          console.log("this verify test... Nope...");
          this.signout();
        }
      } catch (error) {
        console.log("signing out...", error);
        this.signout();
      }
    } else {
      this.signout();
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;

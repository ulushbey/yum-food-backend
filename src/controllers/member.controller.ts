import { Request, Response } from "express";
import { T } from "../libs/common";

const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("error, goHome:", err);
  }
};

memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("error, getLogin:", err);
  }
};
memberController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("error, getSignup:", err);
  }
};

export default memberController;

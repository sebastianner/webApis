import express, { Request, Response, NextFunction, Application } from "express";
import Controller from "./controller";
import response from "../../../network/response";
const router = express.Router();
const controller = new Controller();

router.post("/v1/login", login);

async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = await controller.login(req.body.username, req.body.password);
    response.success(req, res, token, 200);
  } catch (error: unknown) {
    next(error);
  }
}

export default router;

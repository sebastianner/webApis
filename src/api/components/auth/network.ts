import express, { Request, Response, NextFunction, Application } from "express";
import Controller from "./controller";
import response from "../../../network/response";
import validator from "../../../middlewares/schema.validator";
import schema from "../../../schemas/auth.schema";
const router = express.Router();
const controller = new Controller();

router.post("/login", validator(schema.loginAuthSchema, "body"), login);

async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = await controller.login(
      req.body.password,
      req.body.username,
      req.body.email
    );
    response.success(req, res, token, 200);
  } catch (error: unknown) {
    next(error);
  }
}

export default router;

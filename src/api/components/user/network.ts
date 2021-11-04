import express, { Request, Response, NextFunction } from "express";
import response from "../../../network/response";
import Controller from "./controller";
import ReqResponse from "../../../interfaces/ReqResponse";
import userSchemas from "../../../schemas/user.schema";
import validator from "../../../middlewares/schema.validator";
const router = express.Router();
const controller = new Controller();

router.get("/:table", list);
router.post("/", validator(userSchemas.createUserSchema, "body"), insert);

async function list(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const list: ReqResponse = await controller.list(req.params.table);
    response.success(req, res, list, 200);
  } catch (error: unknown) {
    next(error);
  }
}

async function insert(
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const insert: ReqResponse = await controller.insert(req.body);
    console.log(insert);
    response.success(req, res, insert, 200);
  } catch (error: unknown) {
    next(error);
  }
}

export default router;

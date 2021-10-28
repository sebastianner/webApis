import express, { Request, Response, NextFunction } from "express";
import response from "../../../network/response";
import controller from "./controller";
import ReqResponse from "../../../interfaces/ReqResponse";
const router = express.Router();

router.get("/:table", list);
router.post("/", insert);

async function list(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const list: ReqResponse = await controller.list(req.params.table);
    response.success(req, res, next, list, 200);
  } catch (error: unknown) {
    console.log(error);
    response.error(req, res, next, error, 500);
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
    response.success(req, res, next, insert, 200);
  } catch (error) {
    return response.error(req, res, next, error, 500);
  }
}

export default router;

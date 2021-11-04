import { Request, Response, NextFunction } from "express";
import response from "../network/response";

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  response.error(req, res, error, error.message);
}

export default errorHandler;

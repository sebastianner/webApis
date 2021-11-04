import { Boom } from "@hapi/boom";
import { Request, Response, NextFunction } from "express";
import response from "../network/response";

function boomErrorHandler(
  error: Boom,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error.isBoom) {
    const { output } = error;
    response.error(
      req,
      res,
      output.payload.message,
      output.payload.error,
      output.payload.statusCode
    );
  }
  next(error);
}

export default boomErrorHandler;

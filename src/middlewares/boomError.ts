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
      error.data,
      output.payload.error,
      output.payload.statusCode
    );
  } else {
    next(error);
  }
}

export default boomErrorHandler;

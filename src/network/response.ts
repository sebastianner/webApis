import express, { Request, Response, NextFunction } from "express";
import httpStatus, { StatusCodes } from "http-status-codes";
import ReqResponse from "../interfaces/ReqResponse";
const success = (
  req: Request,
  res: Response,
  next: NextFunction,
  data: ReqResponse,
  status: number = 200
): void => {
  const statusText: any = httpStatus.getStatusText(status);
  console.log(statusText);
  res.status(status).send({
    error: false,
    status,
    body: data,
  });
};

const error = (
  req: Request,
  res: Response,
  next: NextFunction,
  error: unknown,
  status: number = 200
): void => {
  const statusText: any = httpStatus.getStatusText(status);
  res.status(status).send({
    error: error,
    status,
    body: false,
  });
};

export default { success, error };

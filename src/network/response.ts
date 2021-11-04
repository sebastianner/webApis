import express, { Request, Response, NextFunction } from "express";
import httpStatus, { StatusCodes } from "http-status-codes";
import ReqResponse from "../interfaces/ReqResponse";
const success = (
  req: Request,
  res: Response,
  data: ReqResponse | string,
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
  error: unknown,
  message: string,
  status: number = 500
): void => {
  res.status(status).send({
    error: message,
    status,
    body: false,
  });
};

export default { success, error };

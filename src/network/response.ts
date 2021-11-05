import express, { Request, Response, NextFunction } from "express";
import httpStatus, { StatusCodes } from "http-status-codes";
import { ValidationResult } from "joi";
import ReqResponse from "../interfaces/ReqResponse";
const success = (
  req: Request,
  res: Response,
  data: ReqResponse | unknown,
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
  message: unknown,
  error: string,
  status: number = 500
): void => {
  console.log(message);

  res.status(status).send({
    error,
    status,
    body: false,
  });
};

export default { success, error };

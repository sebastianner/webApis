import { Schema, ValidationResult } from "joi";
import { Response, NextFunction } from "express";
import boom from "@hapi/boom";

function validatorHandler(schema: Schema, property: any) {
  return (req: any, res: Response, next: NextFunction): void => {
    const data: [any] = req[property];
    const { error }: ValidationResult = schema.validate(data, {
      abortEarly: true,
    });
    if (error) {
      next(boom.badRequest(error.message));
    }
    next();
  };
}

export default validatorHandler;

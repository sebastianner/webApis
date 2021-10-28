// import express, { Request, Response, NextFunction } from "express";
// import controller from "./controller";
// import response from "../../../network/response";

// const router = express.Router();
// router.post("/login", login);

// async function login(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> {
//   try {
//     const token = await controller.login(
//       req.body.email,
//       req.body.username,
//       req.body.password
//     );
//     response.success(req, res, next, token, 200);
//   } catch (error: unknown) {
//     response.error(req, res, next, error, 500);
//   }
// }

// export default router;

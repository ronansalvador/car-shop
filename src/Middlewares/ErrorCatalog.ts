import { NextFunction, Request, Response } from 'express';
import errorIdentify from '../Utils/ErrorIdentify';

export default function ErrorCatalog(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  const { message, code } = errorIdentify(error.message);
  console.log('chegou no erro');
  console.log(message, code);
  
  res.status(code).json({ message });
  next();
}
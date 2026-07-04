import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUser(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Users Created Successfully',
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: 'Failed to Create User',
      data: error,
    });
  }
};

export const userController = {
  createUser,
};

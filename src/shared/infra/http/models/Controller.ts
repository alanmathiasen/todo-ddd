import { Request, Response } from "express";

export abstract class BaseController {
  protected abstract executeImpl(
    request: Request,
    response: Response
  ): Promise<void | any>;

  public async execute(request: Request, response: Response): Promise<void> {
    try {
      await this.executeImpl(request, response);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
    }
  }

  public static jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message });
  }
}

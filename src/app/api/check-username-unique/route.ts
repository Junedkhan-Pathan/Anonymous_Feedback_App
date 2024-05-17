import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { userValidationSchema } from "@/schemas/signUpSchema";
import { z } from "zod";

const UsernameQuerySchema = z.object({
  username: userValidationSchema,
});

export async function GET(request: Request) {
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParams = { username: searchParams.get("username") };

    //validation with zod

    const result = UsernameQuerySchema.safeParse(queryParams);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];

      return Response.json(
        {
          success: false,
          message:
            usernameErrors.length > 0
              ? usernameErrors.join(", ")
              : "Invalid query parameter",
        },
        { status: 400 }
      );
    }

    const { username } = result.data;

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    console.log("=====>User", existingVerifiedUser);

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "User alredy exist with this username !!",
        },
        { status: 400 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is unique",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error while username checking!!", error);

    return Response.json(
      {
        success: false,
        message: "Error in username checking!!",
      },
      { status: 500 }
    );
  }
}

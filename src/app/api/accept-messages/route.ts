import dbConnect from "@/lib/dbConnect";
import { User, getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  dbConnect();

  const session = await getServerSession(authOptions);

  const user: User = session?.user as User;

  if (!session || !user) {
    return Response.json(
      {
        success: false,
        message: "Not authenticated!!",
      },
      { status: 401 }
    );
  }

  const userId = user._id;
  const { acceptMessages } = await request.json();

  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      userId,
      { isAcceptingMessage: acceptMessages },
      { new: true }
    );

    if (!updateUser) {
      return Response.json(
        {
          success: false,
          message: "Failed to user acceptence message update!!",
          updateUser,
        },
        { status: 401 }
      );
    }
    return Response.json(
      {
        success: true,
        message: "User acceptence message successfully update!!",
        updateUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in accepts messages!!", error);

    return Response.json(
      {
        success: false,
        message: "Failed to user accpet message upadate!!",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;

  if (!session || !user) {
    return Response.json(
      {
        success: false,
        message: "Not authenticated!!",
      },
      { status: 401 }
    );
  }

  const userId = user._id;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      );
    }
    return Response.json(
      {
        success: true,
        isAcceptingMessages: user.isAcceptingMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in accepts status messages!!", error);

    return Response.json(
      {
        success: false,
        message: "Failed to user accpet message status upadate!!",
      },
      { status: 500 }
    );
  }
}

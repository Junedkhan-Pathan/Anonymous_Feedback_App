import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "juned@logicrays.com",
      subject: "NextJS Feedback app -Junedkhan",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification mail send successfully!!" };
  } catch (emailError) {
    console.log("Error in verification send mail FAILED!!", emailError);
    return { success: false, message: "Verification send mail FAILED!!" };
  }
}

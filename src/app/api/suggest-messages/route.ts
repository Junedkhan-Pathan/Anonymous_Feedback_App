import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import dummyData from "../../../../DummyGptQuestions.json";

interface IQuestions {
  [index: string]: string;
}

const questions: IQuestions = dummyData;
function getRandomQuestions(numQuestions: number): string {
  const randomQuestions: string[] = [];
  const questionIndices: string[] = Object.keys(questions);

  while (randomQuestions.length < numQuestions) {
    const randomIndex: string = (
      Math.floor(Math.random() * questionIndices.length) + 1
    ).toString();
    const randomQuestion: any = questions[randomIndex];

    if (!randomQuestions.includes(randomQuestion)) {
      randomQuestions.push(randomQuestion);
    }
  }

  return randomQuestions.join("||");
}
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const dummyQuestions = getRandomQuestions(3);

    // const prompt =
    //   "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    //This is the openAi logic that take charge if we used it api

    // const response = await openai.completions.create({
    //   model: "gpt-3.5-turbo-instruct",
    //   max_tokens: 400,
    //   stream: true,
    //   prompt,
    // });

    // const stream = OpenAIStream(response);

    // return new StreamingTextResponse(stream);

    return Response.json(
      {
        success: true,
        message: dummyQuestions,
      },
      { status: 200 }
    );
  } catch (error) {
    //This is the openAi logic that take charge if we used it api
    // if (error instanceof OpenAI.APIError) {
    //   // OpenAI API error handling
    //   const { name, status, headers, message } = error;
    //   return NextResponse.json({ name, status, headers, message }, { status });
    // } else {
    //   // General error handling
    //   console.error("An unexpected error occurred:", error);
    //   throw error;
    // }

    console.log("Error in generate messages!!", error);

    return Response.json(
      {
        success: false,
        message: "Failed to generate messages!!",
      },
      { status: 401 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    // empty body request
    if (!bodyText || bodyText.trim() === '') {
      return NextResponse.json(
        { error: "Request Body cannot be empty" },
        { status: 400 })
    }

    const body = JSON.parse(bodyText);
    const {
      name,
      description,
      totalFunding,
      peopleBenefited,
      date,
    } = body;

    if (
      !name ||
      !description ||
      totalFunding === undefined ||
      peopleBenefited === undefined ||
      !date
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, description, totalFunding, peopleBenefited, date",
        },
        { status: 400 }
      );
    }




  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

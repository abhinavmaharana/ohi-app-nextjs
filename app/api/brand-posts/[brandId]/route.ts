import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { brandId: string } }
) {
  const { brandId } = params;

  const apiUrl =
    `https://staging.ohiapp.com/api/v2/public/posts/purchased-and-non-purchased/${brandId}?page=1&pageSize=20`;

  try {
    const res = await fetch(apiUrl, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const text = await res.text();

    let json: any = null;
    try {
      json = JSON.parse(text);
    } catch {
      console.error("Could not parse upstream JSON:", text);
      json = null;
    }

    console.log("Brand Posts API →", json?.data?.length, "items");

    // If upstream returns valid data → pass it through
    if (Array.isArray(json?.data)) {
      return NextResponse.json(json);
    }

    // fallback safe empty result
    return NextResponse.json({
      statusCode: 200,
      status: "success",
      data: [],
    });

  } catch (err) {
    console.error("Brand posts API crashed:", err);

    return NextResponse.json(
      {
        statusCode: 200,
        status: "success",
        data: [],
      },
      { status: 200 }
    );
  }
}

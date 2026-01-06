import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: { brandId: string } }
) {
  const { brandId } = params;

  const apiUrl =
    `https://staging.ohiapp.com/api/v2/public/posts/purchased-and-non-purchased/${brandId}?page=0&pageSize=20`;

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
      json = null;
    }

    // Backend sometimes throws 500 when purchasedJsonObject is null
    if (!res.ok) {
      console.warn("Upstream failed — safely returning empty list");
      return NextResponse.json({
        statusCode: 200,
        status: "success",
        message: null,
        data: [],
      });
    }

    return NextResponse.json({
      statusCode: json?.statusCode ?? 200,
      status: json?.status ?? "success",
      message: json?.message ?? null,
      data: Array.isArray(json?.data) ? json.data : [],
    });
  } catch (err) {
    console.error("Brand posts API crashed:", err);

    // Always safely fallback — never break UI
    return NextResponse.json(
      {
        statusCode: 200,
        status: "success",
        message: null,
        data: [],
      },
      { status: 200 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId
    const searchParams = request.nextUrl.searchParams
    const brandStories = searchParams.get('brandStories')
    
    // Use staging API - change to 'https://app.ohiapp.com' for production
    let apiUrl = `https://staging.ohiapp.com/api/v2/public/posts/${userId}`
    if (brandStories === 'true') {
      apiUrl += '?brandStories=true'
    }
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      // Add cache control if needed
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `HTTP error! status: ${response.status}` },
        { status: response.status }
      )
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching brand stories:', error)
    return NextResponse.json(
      { error: 'Failed to fetch brand stories' },
      { status: 500 }
    )
  }
}


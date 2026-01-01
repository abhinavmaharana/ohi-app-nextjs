import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { brandId: string } }
) {
  try {
    const brandId = params.brandId
    const searchParams = request.nextUrl.searchParams
    
    // Get query parameters
    const page = searchParams.get('page')
    const pageSize = searchParams.get('pageSize')
    const shortStoriesForLast24Hrs = searchParams.get('shortStoriesForLast24Hrs')
    
    // Build API URL - Use staging API as per note
    let apiUrl = `https://staging.ohiapp.com/api/v2/public/stories/${brandId}`
    
    // Build query string
    const queryParams = new URLSearchParams()
    if (page) queryParams.append('page', page)
    if (pageSize) queryParams.append('pageSize', pageSize)
    if (shortStoriesForLast24Hrs !== null && shortStoriesForLast24Hrs !== undefined) {
      queryParams.append('shortStoriesForLast24Hrs', shortStoriesForLast24Hrs)
    }
    
    const queryString = queryParams.toString()
    if (queryString) {
      apiUrl += `?${queryString}`
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


import {NextRequest, NextResponse} from 'next/server'
import {getZipCode} from '@/actions/address/address-actions'

export async function GET(req: NextRequest): Promise<NextResponse> {
    const cityId = req.nextUrl.searchParams.get('city_id');

    if (!cityId) {
        return NextResponse.json({error: 'city_id is required'}, {status: 400});
    }
    const zipCode: any = await getZipCode(Number(cityId))

    return NextResponse.json(zipCode)
}

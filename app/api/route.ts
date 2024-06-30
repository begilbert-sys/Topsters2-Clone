import { NextRequest, NextResponse } from "next/server";
import { AlbumData } from '@/app/types/chartdata';
import { headers } from "next/headers";
const USER_AGENT = "Topsters2-Rebuilt/1.0 (begilbert238@gmail.com)";
function getEndpoint(albumName: string) {
    return `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${albumName}&api_key=${process.env.API_KEY}&format=json`;
}

function parseAlbumJson(albummatches: any[]): AlbumData[] {
    let urls: AlbumData[] = [];
    // album.image is an array of 4 images: small, medium, large, extralarge
    // album.image[2] corresponds to 'large'
    albummatches.forEach((album: any ) => {
        urls.push({
            name: album.name,
            artist: album.artist,
            image: album.image[2]['#text']
        });
    });
    return urls;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const albumName = searchParams.get('albumName') as string;
    const response = await fetch(
        getEndpoint(albumName), {
            method: 'GET',
            headers: {'User-Agent': USER_AGENT}
        }
    );

    const { results } = await response.json();

    const urls = parseAlbumJson(results.albummatches.album);
    return new NextResponse(JSON.stringify(urls), {status: 200});
}

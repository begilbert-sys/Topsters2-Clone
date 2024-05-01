export interface AlbumData {
    name: string
    artist: string
    image: string
};

export type ChartSize = 'Custom' | 'Top 40' | 'Top 42' | 'Top 100';

export interface ChartData {
    albumList: (AlbumData | undefined)[]
    size: ChartSize
    titled: boolean
    numbered: boolean
    playCounts: boolean
    shadows: boolean
    background: string
    font: string
    padding: number
    rows: number
    columns: number
}

export const defaultChartData: ChartData = {
    albumList: new Array(42),
    size: 'Top 42',
    titled:  false,
    numbered: false,
    playCounts: false,
    shadows: false,
    background: '#000',
    font: 'monospace',
    padding: 2,
    rows: 3,
    columns: 3
}
interface AlbumData {
    url: string
    info: string
};

type ChartSize = 'Custom' | 'Top 40' | 'Top 42' | 'Top 100';

export interface ChartData {
    albumList: AlbumData[]
    size: ChartSize
    albumTitles: boolean
    numbered: boolean
    playCounts: boolean
    shadows: boolean
    background: string
    font: string
    padding: number
    rows?: number
    columns?: number
}

export const defaultChartData: ChartData = {
    albumList: [],
    size: 'Top 42',
    albumTitles:  false,
    numbered: false,
    playCounts: false,
    shadows: false,
    background: '',
    font: 'monospace',
    padding: 2,
    rows: 5,
    columns: 5
}
/*
export class ChartData {
    albumList: AlbumData[]
    size: ChartSize
    albumTitles: boolean
    numbered: boolean
    playCounts: boolean
    shadows: boolean
    background: string
    font: string
    padding: number

    constructor (prevChartData?: ChartData) {
        if (prevChartData) {
            this.albumList = prevChartData.albumList;
            this.size = prevChartData.size;
            this.albumTitles = prevChartData.albumTitles;
            this.numbered = prevChartData.numbered;
            this.playCounts = prevChartData.playCounts;
            this.shadows = prevChartData.shadows;
            this.background = prevChartData.background;
            this.font = prevChartData.font;
            this.padding = prevChartData.padding;


        } else {
            // default values 
            this.albumList = [];
            this.size = 'Top 42';
            this.albumTitles = false;
            this.numbered = false;
            this.playCounts = false;
            this.shadows = false;
            this.background = '';
            this.font = 'monospace';
            this.padding = 2;
        }
    }
}
*/
import { ChartData } from '@/app/types/chartdata';
interface AlbumTitlesProps {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}
export default function AlbumTitles({chartData, setChartData}: AlbumTitlesProps) {
    let listElements = [];
    for (let i = 0; i < chartData.albumList.length; i++) {
        const albumData = chartData.albumList[i];
        if (albumData != undefined) {
            listElements.push(
            <li key={i}>
                {albumData.artist} - {albumData.name}
            </li>
            );
        }
    }
    if (chartData.numbered) {
        return (
            <ol>
                {listElements}
            </ol>
        )
    } else {
        return (
            <ul>
                {listElements}
            </ul>
        )
    }
}
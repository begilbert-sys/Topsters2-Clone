import styles from '@/app/page.module.css';

import { ChartData } from '@/app/types/chartdata';

import Square from '@/app/components/square';

interface ChartParams {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}

export default function Chart({chartData, setChartData}: ChartParams) {
    let squareMatrix = [];
    for (let i = 0; i < chartData.rows!; i++) {
        let squareRow = [];
        for (let i = 0; i < chartData.columns!; i++) {
            squareRow.push(<td><Square /></td>);
        }
        squareMatrix.push(<tr>{squareRow}</tr>);
    }
    return (
        <table cellSpacing={chartData.padding} className={styles.chart}>
            <tbody>
                {squareMatrix}
            </tbody>
        </table>
    )
}
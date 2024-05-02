import styles from '@/app/page.module.css';

import { ChartData } from '@/app/types/chartdata';

import Square from '@/app/components/square';
import AlbumTitles from '@/app/components/albumtitles';

interface ChartParams {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}

interface RowSpecs {
    count: number
    size: number
}

const DEFAULTSQUARESIZE = 200;

function generateChart(chartData: ChartData, setChartData: (cd: ChartData) => void, centerRow: boolean, tupleArray: RowSpecs[]): JSX.Element {
    const maxWidth = (DEFAULTSQUARESIZE * 5) + (chartData.padding * 10);
    let squareMatrix: JSX.Element[] = [];
    let index = 0;
    let row = 0;
    tupleArray.forEach(rowSpecs => {
        let squareRow = [];
        let padding = chartData.padding;
        if (centerRow) {
            padding = (maxWidth - (rowSpecs.size * rowSpecs.count)) / (rowSpecs.count * 2);
        }
        for (let i = 0; i < rowSpecs.count; i++) {
            squareRow.push(<Square key={i} chartData={chartData} setChartData={setChartData} index={index++} size={rowSpecs.size} padding={padding}/>);
        }
        squareMatrix.push(<div key={row++} className={styles.squareRow}>{squareRow}</div>);
    });
    return (<div>{squareMatrix}</div>);
}

function custom(chartData: ChartData, setChartData: (cd: ChartData) => void): JSX.Element {
    let rowSpecs = [];
    for (let i = 0; i < chartData.rows; i++) {
        rowSpecs.push({count: chartData.columns, size: 200});
    }
    return generateChart(chartData, setChartData, false, rowSpecs);
}


function top40(chartData: ChartData, setChartData: (cd: ChartData) => void): JSX.Element {
    return generateChart(chartData, setChartData, false, [
        {count: 5, size: 200},
        {count: 6, size: 166.3},
        {count: 6, size: 166.3},
        {count: 7, size: 133},
        {count: 7, size: 133},
        {count: 9, size: 100}
    ]);
}

function top42(chartData: ChartData, setChartData: (cd: ChartData) => void): JSX.Element {
    return generateChart(chartData, setChartData, true, [
        {count: 5, size: 200},
        {count: 5, size: 200},
        {count: 6, size: 166.3},
        {count: 6, size: 166.3},
        {count: 10, size: 98.2}
    ]);
}

function top100(chartData: ChartData, setChartData: (cd: ChartData) => void): JSX.Element {
    return generateChart(chartData, setChartData, true, [
        {count: 5, size: 200},
        {count: 5, size: 200},
        {count: 6, size: 166.3},
        {count: 6, size: 166.3},
        {count: 6, size: 166.3},
        {count: 10, size: 98.2},
        {count: 10, size: 98.2},
        {count: 10, size: 98.2},
        {count: 14, size: 69},
        {count: 14, size: 69},
        {count: 14, size: 69}
    ]);
}

function parseBackground(background: string) {
    if (background.startsWith('#')) {
        return background;
    } else {
        return `url("${background}")`;
    }
}

export default function Chart({chartData, setChartData}: ChartParams) {
    let layout;
    switch (chartData.size) {
        case 'Top 40':
            layout = top40(chartData, setChartData);
            break;
        case 'Top 42':
            layout = top42(chartData, setChartData);
            break;  
        case 'Top 100':
            layout = top100(chartData, setChartData);
            break;
        case 'Custom':
            layout = custom(chartData, setChartData);
        
    }

    return (
        <div 
            style={{background: parseBackground(chartData.background)}}
            className={styles.chart}
            id="chart"
        >
            {layout}
            <AlbumTitles
                chartData={chartData}
                setChartData={setChartData}
            />
        </div>
    )
}
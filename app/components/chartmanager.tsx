import { useState, useEffect, ChangeEvent } from 'react';

import { ChartData, defaultChartData } from '@/app/types/chartdata';

interface ChartManagerProps {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}

interface ChartMap {
    [name: string]: ChartData
}

export default function ChartManager({chartData, setChartData}: ChartManagerProps) {
    const [chartMap, setChartMap] = useState<ChartMap>({});

    useEffect(() => {
        const localStorageStringData = localStorage.getItem("chartMap");

        // if chartMap is empty, check localStorage
        // this is the dumbest way to check if an object is empty in any language I've used
        if (Object.keys(chartMap).length === 0) {
            // if localStorage is empty, create a map with the current chart
            if (localStorageStringData == null) {
                setChartMap({[chartData.name] : chartData});

            // otherwise set chartMap to the chartMap in localStorage
            } else {
                setChartMap(JSON.parse(localStorageStringData));
            }
        } else {
            // fill localStorage with the current chartMap
            localStorage.setItem("chartMap", JSON.stringify(chartMap));
        }
    }, [chartMap]);

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedChart = e.target.value;
        chartMap[chartData.name] = chartData;
        setChartMap({...chartMap});
        setChartData(chartMap[selectedChart]);
    };

    const handleNew = () => {
        const newChartName = prompt("Enter a name for your chart");
        if (newChartName == null) {
            alert("Error: name cannot be blank");
        } else {
            chartMap[chartData.name] = chartData;
            let newChart = {...defaultChartData};
            console.log(newChart.albumList);
            newChart.name = newChartName;
            chartMap[newChartName] = newChart;
            setChartMap({...chartMap});
            setChartData(newChart);
        }
    };

    const handleRename = () => {
        const newChartName = prompt("Enter a new name for your chart");
        if (newChartName == null) {
            alert("Error: name cannot be blank");
        } else {
            delete chartMap[chartData.name];
            chartData.name = newChartName;
            setChartData({...chartData});
            chartMap[chartData.name] = chartData;
            setChartMap({...chartMap});
        }
    };

    const handleDelete = () => {
        if (Object.keys(chartMap).length === 1) {
            alert("Must have more than one chart");
        } else {
            const result = confirm(`Are you sure you want to delete ${chartData.name}?`);
            if (result) {
                delete chartMap[chartData.name];
                setChartMap({...chartMap});
                setChartData(chartMap[Object.keys(chartMap)[0]]);
            }

        }
    };
    let chartList = []
    let i = 0;
    for (const chartName in chartMap) {
        chartList.push(
            <option key={i++} value={chartName}>{chartName}</option>
        );
    }

    return (
        <>
        <select
            name="chart"
            id="chart-select"
            value={chartData.name}
            onChange={handleSelect}
        >
            {chartList}
        </select>
        ⬿ Active chart
        <div>
            <button onClick={handleNew}>New</button>
            <button onClick={handleRename}>Rename</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </>
    )
}
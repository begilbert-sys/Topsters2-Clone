import { useState } from 'react';
import styles from '@/app/page.module.css';

import { ChartData, defaultChartData } from '@/app/types/chartdata';

import SideBar from '@/app/components/sidebar';
import Chart from '@/app/components/chart';
import Download from '@/app/components/download';

export default function Main() {
    const [chartData, setChartData] = useState<ChartData>(defaultChartData);
    return (
        <div className={styles.mainWrapper}>
            <SideBar
                chartData={chartData}
                setChartData={setChartData}
            />

            <Chart 
                chartData={chartData}
                setChartData={setChartData}
            />
            <Download />
        </div>
    )
}
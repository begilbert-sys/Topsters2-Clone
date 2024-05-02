import { useState } from 'react';

import styles from '@/app/page.module.css';

import { ChartData } from '@/app/types/chartdata';

import Options from '@/app/components/options';
import Search from '@/app/components/search';

interface SideBarParams {
    chartData: ChartData
    setChartData: (cd: ChartData) => void

}
export default function SideBar({chartData, setChartData}: SideBarParams) {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    return (
        <div className={styles.sideBar}>
            <div>
                <button>New</button>
                <button>Rename</button>
                <button>Delete</button>
            </div>
            <button onClick={() => setShowOptions(!showOptions)}>
                {showOptions ? "Hide Options" : "Show Options"}
            </button>
            {showOptions && (
                <Options
                    chartData={chartData}
                    setChartData={setChartData}
                />
            )}
            <Search 
                chartData={chartData}
                setChartData={setChartData}
            />

        </div>

    )
}
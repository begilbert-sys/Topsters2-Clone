import { ChartData } from '@/app/types/chartdata';

import Options from '@/app/components/options';
import Search from '@/app/components/search';

interface SideBarParams {
    chartData: ChartData
    setChartData: (cd: ChartData) => void

}
export default function SideBar({chartData, setChartData}: SideBarParams) {
    return (
        <div>
            <div>
                <button>New</button>
                <button>Rename</button>
                <button>Delete</button>
            </div>
            <Options
                chartData={chartData}
                setChartData={setChartData}
            />
            <Search />

        </div>

    )
}
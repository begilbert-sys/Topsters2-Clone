import styles from '@/app/page.module.css';

import { ChartData } from '@/app/types/chartdata';

interface OptionsParams {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}

export default function Options({chartData, setChartData}: OptionsParams) {
    return (
        <div className={styles.options}>
            <label htmlFor="size-select">Size: </label>
            <select name="pets" id="size-select" >
                <option value="c">Custom</option>
                <option value="40" selected={true}>Top 40</option>
                <option value="42">Top 42</option>
                <option value="100">Top 100</option>
            </select>
            <div className={styles.albumTitleOptions}>
                <label id="titled">
                    <input type="checkbox" id="albumTitles" />
                    album titles
                </label>
                <br />
                ⎿
                <label id="numbered">
                    <input type="checkbox" id="numbered" />
                    numbered
                </label>
                <br />
                ⎿
                <label id="playcounts">
                    <input type="checkbox" id="playcounts" />
                    playcounts ( only)
                </label>
            </div>
            <label id="shadows">
                <input type="checkbox" id="shadows" />
                shadows
            </label>
            <br />
            <label>
                Background:
                <input type="search" placeholder="#HEX color or image URL" />
                ⬿ URL/HEX
            </label>
            <br />
            <label>
                Font:
                <input type="search" />
            </label>
            <br />
            <label>
                Padding:
                <input 
                    type="range" 
                    min="0" 
                    max="20" 
                    value={chartData.padding} 
                    onChange={e => {
                        chartData.padding = Number(e.target.value);
                        setChartData({...chartData});
                    }}
                />
                {chartData.padding}
            </label>
        </div>
    )
}
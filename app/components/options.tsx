import type { ChangeEvent } from 'react';
import styles from '@/app/page.module.css';

import { ChartData, ChartSize } from '@/app/types/chartdata';

interface OptionsProps {
    chartData: ChartData
    setChartData: (cd: ChartData) => void
}

function updateChartSize(chartData: ChartData, setChartData: (cd: ChartData) => void): void {
    let newSize: number;
    const oldList = chartData.albumList;
    switch (chartData.size) {
        case 'Top 40':
            newSize = 40;
        case 'Top 42': 
            newSize = 42;
        case 'Top 100':
            newSize = 100;
        case 'Custom':
            newSize = chartData.rows * chartData.columns;
    }
    chartData.albumList = new Array(newSize);
    for (let i = 0 ; i < newSize && i < oldList.length; i++) {
        chartData.albumList[i] = oldList[i];
    }
    setChartData({...chartData});
}
export default function Options({chartData, setChartData}: OptionsProps) {
    return (
        <div className={styles.options}>
            {/*
                Size
            */}
            <label htmlFor="size-select">Size: </label>
            <select 
                name="size" 
                id="size-select" 
                value={chartData.size}
                onChange={e => {
                    chartData.size = e.target.value as ChartSize;
                    updateChartSize(chartData, setChartData);
                }}
            >
                <option value="Custom">Custom</option>
                <option value="Top 40">Top 40</option>
                <option value="Top 42">Top 42</option>
                <option value="Top 100">Top 100</option>
            </select>

            {chartData.size == 'Custom' && (
            <>
                <br />
                <label>
                    Rows:
                    <input 
                        type="range" 
                        min="1" 
                        max="12" 
                        value={chartData.rows} 
                        onChange={e => {
                            chartData.rows = Number(e.target.value);
                            updateChartSize(chartData, setChartData);
                        }}
                    />
                    {chartData.rows}
                </label> 
                <br />
                <label>
                    Columns:
                    <input 
                        type="range" 
                        min="1" 
                        max="12" 
                        value={chartData.columns} 
                        onChange={e => {
                            chartData.columns = Number(e.target.value);
                            updateChartSize(chartData, setChartData);
                        }}
                    />
                    {chartData.columns}
                </label> 
            </>
            )}
            <br />
            {/*
                Album Title Options 
            */} 
            <div className={styles.albumTitleOptions}>
                {/*
                    Album Title
                */}
                <label id="titled">
                    <input 
                        type="checkbox" 
                        id="albumTitles" 
                        checked = {chartData.titled}
                        onChange={e => {
                            chartData.titled = !chartData.titled;
                            setChartData({...chartData});
                        }}
                    />
                    album titles
                </label>
                <br />
                ⎿
                {/*
                    Numbered
                */}
                <label id="numbered">
                    <input 
                        type="checkbox" 
                        id="numbered" 
                        checked = {chartData.numbered}
                        onChange={e => {
                            chartData.numbered = !chartData.numbered;
                            setChartData({...chartData});
                        }}
                    />
                    numbered
                </label>
                <br />
                ⎿
                {/*
                    Playcounts
                */}
                <label id="playcounts">
                    <input 
                        type="checkbox" 
                        id="playcounts" 
                        checked = {chartData.playCounts}
                        onChange={e => {
                            chartData.playCounts = !chartData.playCounts;
                            setChartData({...chartData});
                        }}
                    />
                    playcounts ( only)
                </label>
            </div>

            {/*
                Shadows
            */}
            <label id="shadows">
                <input 
                    type="checkbox" 
                    id="shadows" 
                    checked = {chartData.shadows}
                    onChange={e => {
                        chartData.shadows = !chartData.shadows;
                        setChartData({...chartData});
                    }}
                />
                shadows
            </label>
            <br />

            {/*
                Background
            */}
            <label>
                Background:
                <input 
                    type="search" 
                    placeholder="#HEX color or image URL" 
                    value={chartData.background} 
                    onChange={e => {
                        chartData.background = e.target.value;
                        setChartData({...chartData});
                    }}
                />
                ⬿ URL/HEX
            </label>
            <br />

            {/*
                Font
            */}
            <label>
                Font:
                <input 
                    type="search" 
                    value={chartData.font} 
                    onChange={e => {
                        chartData.font = e.target.value;
                        setChartData({...chartData});
                    }}
                />
            </label>
            <br />

            {/*
                Padding
            */}
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
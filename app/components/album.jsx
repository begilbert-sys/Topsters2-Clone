import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
    ALBUM: 'album'
}

export default function Album({albumData, chartData, setChartData}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'album',
        item: albumData,
    }));

    return <img ref={drag} src={albumData.image} />
}
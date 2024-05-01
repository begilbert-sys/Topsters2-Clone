import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from '@/app/page.module.css';

function swapSquares(chartData, setChartData, index1, index2) {
    const temp = chartData.albumList[index1];
    chartData.albumList[index1] = chartData.albumList[index2];
    chartData.albumList[index2] = temp;
    setChartData({...chartData});
}

export default function Square({chartData, setChartData, index, size, padding}) {
    const ref = useRef(null);
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ['album', 'square'],
        drop: (item, monitor) => {

            chartData.albumList[index] = item;
            setChartData({...chartData});
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
        }
    }), [chartData]);

    const albumData = chartData.albumList[index];

    const [{isDragging}, drag] = useDrag ({
        type: 'square',
        item: {albumData: albumData, index: index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }, []);


    const isActive = canDrop && isOver;
    let backgroundColor = 'white';
    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (isDragging) {
        backgroundColor = '#555555';
    }
    drag(drop(ref));
    return (
        <div 
            ref = {ref} 
            style = {{
                backgroundColor,
                height: size,
                width: size,
                margin: padding
            }} 
            className = { styles.square } 
            data-handler-id={index}
        >
            {albumData != undefined && (
                <img
                    style= {{margin:padding}}
                    height={size} 
                    width={size} 
                    src={albumData.image}
                />
            )}
        </div >
    )
}
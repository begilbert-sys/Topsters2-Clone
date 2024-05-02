import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from '@/app/page.module.css';

export default function Square({chartData, setChartData, index, size, padding}) {
    const swapSquares = (index1, index2) => {
        console.log(chartData.albumList[index1]);
        console.log(chartData.albumList[index2]);
        const temp = chartData.albumList[index1];
        chartData.albumList[index1] = chartData.albumList[index2];
        chartData.albumList[index2] = temp;
        setChartData({...chartData});
    };
    
    const ref = useRef(null);
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ['album', 'square'],
        drop: (item, monitor) => {
            if (monitor.getItemType() === 'album') {
                chartData.albumList[index] = item;
                setChartData({...chartData});
            } else if (monitor.getItemType() === 'square') {
                swapSquares(index, item.index);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        hover(item, monitor) {
            if (albumData == undefined || !ref.current || monitor.getItemType() === 'album') {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();
            if ((hoverBoundingRect.bottom < clientOffset.y < hoverBoundingRect.top)
            && (hoverBoundingRect.left < clientOffset.x < hoverBoundingRect.right)) {
                swapSquares(dragIndex, hoverIndex);
                item.index = hoverIndex;
            }
        }
    }), [chartData]);

    const albumData = chartData.albumList[index];

    const [{isDragging}, drag] = useDrag ({
        type: 'square',
        item: {albumData: albumData, index: index},
        canDrag: albumData != undefined,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });


    const isActive = canDrop && isOver;
    let backgroundColor = 'white';
    if (isActive) {
        backgroundColor = 'darkgreen';
    }
    if (isDragging) {
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
            {(albumData != undefined) && (
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
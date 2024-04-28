import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
    ALBUM: 'album'
}

export default function Album({url}) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'album',
        item: { url },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.url} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }));

    return <img ref={drag} src={url} />
}
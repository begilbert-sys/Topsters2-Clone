import styles from '@/app/page.module.css';
import { useDrop } from 'react-dnd';

export default function Square() {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: 'album',
        drop: () => ({name: 'Dustbin'}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
    }));
    const isActive = canDrop && isOver;
    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return <div ref={drop} style={{backgroundColor}}className={styles.square}></div>
}
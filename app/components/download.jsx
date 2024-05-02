import { toPng, toJpeg } from 'html-to-image';
import download from 'downloadjs';
export default function Download() {
    const handleToPng = async () => {
        const node = document.getElementById('chart');
        toPng(node).then(function (dataUrl) {
            download(dataUrl, 'my_chart.png');
        });
    }
    return (
        <button onClick={handleToPng}>Download as PNG</button>
    )
}
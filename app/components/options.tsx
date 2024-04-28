import styles from '@/app/page.module.css';

export default function Options() {
    return (
        <div>
            <label htmlFor="size-select">Size: </label>
            <select name="pets" id="size-select">
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
        </div>
    )
}
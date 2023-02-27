import { useState } from 'react'
import styles from './Ad.module.css'
1
export default function Ad() {
    const [popup, SetPopup] = useState(true);

    return (
        <>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup__area}>
                            <div onClick={() => SetPopup(false)}>Close</div>
                            Welcome
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}
import styles from './Heading.module.css'
export default function Heading({heading}) {
    return (
        <>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.brdr}></div>
        </>
    )
}
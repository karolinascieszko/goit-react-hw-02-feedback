import React from 'react';

import styles from "./SectionTitle.module.css"

const SectionTitle = ({ sectionTitle, children }) => {
    return (
        <section className={styles.sectionTitle}>
            <h1>{sectionTitle}</h1>
            {children}
        </section>
    )
}

export default SectionTitle;
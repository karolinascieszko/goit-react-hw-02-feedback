import React from 'react';
import styles from "./FeedbackOptions.module.css"



const FeedbackOptions = ({countGoodFeedback, countNeutralFeedback, countBadFeedback }) => {
  return (
        <div>
        <ul className={styles.btnList}>
          <button className={ styles.btnFeedback} onClick={countGoodFeedback}> good </button>
          <button className={ styles.btnFeedback} onClick={countNeutralFeedback}> neutral </button>
           <button className={ styles.btnFeedback}  onClick={countBadFeedback}> bad </button>
      </ul >
      </div>
  )
  
}

export default FeedbackOptions;
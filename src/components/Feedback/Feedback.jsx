import React, { Component } from "react";

import styles from "./Feedback.module.css"

class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  countGoodFeedback = () => {
    this.setState((state) => ({
      ...state,
      good: (state.good + 1),
  }))
  }
  
    countNeutralFeedback = () => {
    this.setState((state) => ({
      ...state,
      neutral: (state.neutral + 1),
  }))
  }
  
   countBadFeedback = () => {
    this.setState((state) => ({
      ...state,
      bad: (state.bad + 1),
  }))
}
  


  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1 className={styles.header}>Please leave feedback</h1>
        <ul className={styles.btnList}>
          <button className={ styles.btnFeedback} onClick={this.countGoodFeedback}> good </button>
          <button className={ styles.btnFeedback} onClick={this.countNeutralFeedback}> neutral </button>
           <button className={ styles.btnFeedback}  onClick={this.countBadFeedback}> bad </button>
        </ul >
          
        <h2 className={styles.statistics}>Statisctics</h2>
        <ul className={styles.statisticsList}>
          <li className={ styles.statisticsFeedback}>Good: {good}</li>
          <li className={ styles.statisticsFeedback}>Neutral: {neutral}</li>
          <li className={styles.statisticsFeedback}>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}
export default Feedback;














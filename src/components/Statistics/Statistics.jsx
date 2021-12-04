import React, { Component } from "react";

import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import NotificationMessage from "../Notification/Notification";
import SectionTitle from "../SectionTitle/SectionTitle";

import styles from "./Statistics.module.css"

class Statistics extends Component {

  state = {

      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
      total: this.props.total,
      positivePercentage: this.props.positivePercentage,
  };



  countGoodFeedback = () => {
      this.setState((state, props) => ({
          ...state,
          good: (state.good + 1),
      }));
      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
  }
  
    countNeutralFeedback = () => {
        this.setState((state, props) => ({
            ...state,
            neutral: (state.neutral + 1),
        }));
        this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
  }
  
   countBadFeedback = () => {
       this.setState((state) => ({
           ...state,
           bad: (state.bad + 1),
       }));
        this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
}
  
    countTotalFeedback = () => {
        this.setState((state) => ({
            ...state,
            total: state.good + state.neutral + state.bad,
        }));
    };

    countPositiveFeedbackPercentage = () => {
        this.setState((state) => ({
            ...state,
            positivePercentage: Math.round((state.good / state.total) * 100),
        }));
    };


  render() {
    return (
        <div>
            <SectionTitle sectionTitle={"Please leave feedback"}>
                <FeedbackOptions
                    countGoodFeedback={this.countGoodFeedback}
                    countNeutralFeedback={this.countNeutralFeedback}
                     countBadFeedback = {this.countBadFeedback}
                />
            </SectionTitle>
            <SectionTitle sectionTitle={"Statistics"}>
                {this.state.total === 0 ? (
                    <NotificationMessage message={"There is no feedback"} />
      
                ) : (   <ul className={styles.statisticsList}>
          <li className={ styles.statisticsFeedback}>Good: {this.state.good}</li>
          <li className={ styles.statisticsFeedback}>Neutral: {this.state.neutral}</li>
          <li className={styles.statisticsFeedback}>Bad: {this.state.bad}</li>
          <li className={styles.statisticsFeedback}>Total: {this.state.total}</li>
          <li className={styles.statisticsFeedback}>Positive Feedback: {this.state.positivePercentage}%</li>

                    </ul>)}
                    </SectionTitle>
      </div>
    );
  }
}

export default Statistics;
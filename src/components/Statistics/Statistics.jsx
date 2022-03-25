import React from 'react';
import PropTypes from 'prop-types';
import { StyledReviewLabel } from './Statistics.style';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good: <StyledReviewLabel>{good}</StyledReviewLabel>
      </p>
      <p>
        Bad: <StyledReviewLabel>{bad}</StyledReviewLabel>
      </p>
      <p>
        Neutral: <StyledReviewLabel>{neutral}</StyledReviewLabel>
      </p>
      <p>
        Total: <StyledReviewLabel>{total}</StyledReviewLabel>
      </p>
      <p>
        Positive feedback:{' '}
        <StyledReviewLabel>{positivePercentage} %</StyledReviewLabel>
      </p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

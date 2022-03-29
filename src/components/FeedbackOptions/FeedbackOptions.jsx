import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.style';

const makeBgColor = (option) => {
  switch (option) {
    case 'good':
      return "#457d54";
    case 'bad':
      return "#d96452";
    case 'neutral':
      return "#787675";
    default:
      return "#00000";
  }

}

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  
  return (
    <div>
      {
        options.map((option) => <Button
        backgroundColor={makeBgColor(option) }
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>)
      }
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.style';

const makeBgColor = (option) => {
  if(option === 'good') {
          return "#457d54"
  } else if (option === 'bad') {
     return "#d96452"
  } else {
    return "#787675"
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

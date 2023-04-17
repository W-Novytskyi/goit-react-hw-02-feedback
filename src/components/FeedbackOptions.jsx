import React from 'react';
import PropTypes from 'prop-types';
import { ContainerBtn, Button, ButtonText } from './Components.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerBtn>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          <ButtonText>{option}</ButtonText>
        </Button>
      ))}
    </ContainerBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

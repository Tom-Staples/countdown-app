import React, { useState } from 'react';
import EventFormUi from './EventFormUi';

const EventForm = props => {
  const [values, setValues] = useState({
    title: '',
    description: '',
    date: '',
    time: ''
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value
    });
  };

  const buttonStyle =
    values.title === '' ||
    values.description === '' ||
    values.date === '' ||
    values.time === ''
      ? 'bg-gray-400'
      : 'bg-purple-400 hover:bg-purple-200';

  return (
    <EventFormUi
      values={values}
      setValues={setValues}
      handleChange={handleChange}
      buttonStyle={buttonStyle}
      handleSubmit={props.handleSubmit}
      handleSwipe={props.handleSwipe}
      activeSection={props.activeSection}
      matches={props.matches}
    />
  );
};

export default EventForm;

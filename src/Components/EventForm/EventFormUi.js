import React from 'react';
import displayStyle from '../../Helpers/displayStyle';

const EventFormUi = props => {
  const style = displayStyle(props.activeSection, 'eventForm');
  return (
    <form
      className={`flex flex-col rounded bg-blue-200 p-4 font-bold text-lg ${
        props.matches && style
      }  xs:mx-1  md:ml-1 md:h-128 md:col-span-2 `}
      onSubmit={e => {
        props.handleSubmit(e, props.values);
        props.setValues({
          title: '',
          description: '',
          date: '',
          time: ''
        });
      }}
      onTouchStart={props.matches ? props.handleSwipe : null}
      onTouchMove={props.matches ? props.handleSwipe : null}
      onTouchEnd={props.matches ? props.handleSwipe : null}
    >
      <h2 className='font-title  self-center mb-4 xs:text-6xl md:text-5xl lg:text-6xl'>
        Event Entry Form
      </h2>
      <label>Enter Event Title</label>
      <input
        id='title'
        type='text'
        className='p-2 mb-4 rounded border-2'
        value={props.values.title}
        onChange={props.handleChange}
      />
      <label>Enter Event Description</label>
      <textarea
        id='description'
        className='rounded p-2 mb-4 border-2'
        value={props.values.description}
        onChange={props.handleChange}
      />
      <label>Select Event Date</label>
      <input
        id='date'
        type='date'
        className='p-2 mb-4 rounded border-2'
        value={props.values.date}
        onChange={props.handleChange}
      />
      <label>Select Event Time</label>
      <input
        id='time'
        type='time'
        className='p-2 mb-4 rounded border-2'
        value={props.values.time}
        onChange={props.handleChange}
      />
      <button
        disabled={props.buttonStyle === 'bg-gray-400'}
        className={`rounded self-center p-2 font-bold xs:w-1/3 sm:w-1/4 md:w-1/2 lg:w-1/3 xl:w-1/4 ${props.buttonStyle}`}
      >
        Add Event
      </button>
    </form>
  );
};

export default EventFormUi;

import React, { useState, useEffect } from 'react';
import './DatePicker.css';
 
const DatePicker = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(value);
 
  useEffect(() => {
    setSelectedDate(value);
  }, [value]);
 
  const handleChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onChange(newDate);
  };
 
  return (
    <div className="date-picker">
      <input
        type="date"
        value={selectedDate}
        onChange={handleChange}
        className="date-picker__input"
      />
    </div>
  );
};
 
export default DatePicker;
import React, { useState } from 'react';

const InterpretationForm = () => {
  const [thoughts, setThoughts] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted interpretation:', thoughts);
    setThoughts('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
        placeholder="Write your initial thoughts and interpretations here..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InterpretationForm;

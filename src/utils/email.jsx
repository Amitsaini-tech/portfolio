import React from 'react';

const Email = ({ email, subject, body }) => {
  const handleclicked = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <button onClick={handleclicked}>
    butom
    </button>
  );
};

export default Email;

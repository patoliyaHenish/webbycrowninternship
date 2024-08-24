import React, { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login Status
      </button>
    </div>
  );
}

export default ConditionalRendering;

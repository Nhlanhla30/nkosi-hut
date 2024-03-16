import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Make sure the URL matches your Express route
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <p>Message from backend: {backendMessage}</p>
    </div>
  );
}

export default App;


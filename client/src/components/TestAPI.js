import React, { useEffect, useState } from 'react';

function TestAPI() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return <p>Message from backend: {backendMessage}</p>;
}

export default TestAPI;

import React from 'react';

import { Time } from './components/Time';
import { Weather } from './components/Weather';
import { DateValue } from './components/DateValue';

function App() {
  return (
    <div className="bg-t-bg min-h-screen flex flex-col items-center justify-center font-mono">
        <Time />
        <DateValue />
        <div className="mt-16">
          <Weather />
        </div>
    </div>
  );
}

export default App;

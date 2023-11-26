import React from 'react';
import { useState, useEffect } from 'react';


const DateTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() =>{
        const timer = setInterval(() => setDate(new Date()), 1000);

        // return function cleanup() {
        //     clearInterval(timer);
        // }
    })

  return (
    <div>
      <h1 className ="time"> {date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default DateTime;


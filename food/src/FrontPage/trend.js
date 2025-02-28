import React, { useEffect, useState } from 'react';
import Slide from './Slider'
import Foot from './foot'
export default function Trending() {
  // Assuming your Slider component requires some data items
  
  const [response, setResponse] = useState('');
const [arr, setArr] = useState([]);

async function funtosee(data) {
  console.log(data);

  setArr(
    data.map((item) => [
      item['TranslatedRecipeName'],
      item['Cuisine'],
      item['Diet'],
      item['Course'],
      item['Image'],
    ])
  );
}

useEffect(() => {
  const sendMessage = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'hello' }),
      });

      const data = await response.json();
      setResponse(data.response);
       funtosee(data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  sendMessage();
}, []);
  
  return (
    
    <div className='Search'>
      
      <div className='Recommed'>
        TRENDING RECIPE
      </div>
      <Slide images1={arr}/>
      <div className='Recommed'>
        Cuisines
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
       
      </div>
      <div className='mt-[4vw]'>
        <Slide images1={arr}/>
      </div>
      <div className='Recommed'>
        Cursins
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
       
      </div>
      <div className='mt-[4vw]'>
        <Slide images1={arr}/>
      </div>
      <br/>
      
      <div>
       
      </div>
    </div>
  );
}
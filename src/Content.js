import React from 'react'
import { useState } from 'react';

const Content = () => {
    
  function handleName(){
    const name = ["Earn","Give","Grow"];
    const int = Math.floor(Math.random()*3);
    return name[int];
  }
  const handleClick1 = (e) => {
      console.log(e.target.innerText);
  }
  const handleClick = () => {
    const name1 = window.prompt("What is your name");
    console.log(`Your name is ${name1}`)
  }
  const [count, setCount] = useState(99);

  function incrementFunction() {
    setCount(count + 1);
  }
  function decrementFunction() {
    setCount(count -1);
  }

    return(
      <main>
           <p onDoubleClick={() => handleClick("bala")}>Let's {handleName()} money</p>
          <button onClick={(e) => handleClick1(e)}>Subscribe</button>
           <p >Let's  money</p>
           <button>Subscribe my channel</button><br />
           <button onClick={decrementFunction}>-</button><br />
           <span>{count}</span><br />
           <button onClick={incrementFunction}>+</button>
      </main>
    )
}
export default Content;
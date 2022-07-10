import React, { useState, useRef } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const email = useRef(null)
  const password = useRef(null)
  const handleChange = (e) => {
    const { target: { name, value } } = e
    if (name === 'text') {
      setText(value)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('before reset : ',email.current.value, password.current.value)
    e.target.reset();
    console.log('after reset : ', email.current.value, password.current.value)
  };
  return (
    <>
      <div>
        <h1>Hello Steve Jeong!</h1>
        <input
          name='text'
          type='text'
          value={text}
          onChange={handleChange} />
        <p>You typed {text}</p>
      </div>


      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          ref={email}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          ref={password}
        />
        <input type='submit' />
      </form>
      <p>
        You typed 
      </p>
    </>
  );
}


// import {useRef} from 'react';

// const App = () => {
//   const ref = useRef(null);

//   const handleClick = () => {
//     // 👇️ reset input field's value
//     console.log(ref.current.value)
//     ref.current.value = '';
//   };

//   return (
//     <div>
//       <input
//         ref={ref}
//         id="message"
//         name="message"
//         type="text"
//       />

//       <button onClick={handleClick}>Clear field</button>
//     </div>
//   );
// };

// export default App;
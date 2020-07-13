import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Potato from './Potato';
import Fineapple from './Fineapple';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<App />, document.getElementById('root'));  // root 라고 하는 element를 찾아서 <App /> 컴포넌트를 밀어 넣어라 
ReactDOM.render(<Potato />, document.getElementById('potato'));  // potato 라고 하는 element를 찾아서 <Potato /> 컴포넌트를 밀어 넣어라 
ReactDOM.render(<Fineapple />, document.getElementById('fineapple'));  // fineapple 이라고 하는 element를 찾아서 <Fineapple /> 컴포넌트를 밀어 넣어라 


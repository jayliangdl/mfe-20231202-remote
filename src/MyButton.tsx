import {useState} from 'react'
function MyButton(){
  const [count, setCount] = useState(0);
  const handle = () => {
    setCount(count + 2);
  }
  return (
    <>
      <button onClick={handle}>click me</button>
      <div>{count}</div>
    </>
  );
}
export default MyButton;
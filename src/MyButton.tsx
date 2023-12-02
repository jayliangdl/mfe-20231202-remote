function MyButton(){
  function handle(){
    console.log(1);
  }
  return (
    <button onClick={handle}>click me</button>
  );
}
export default MyButton;
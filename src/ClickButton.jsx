//click event = an interaction when a user clicks on a specific element
//we can respond to clicks by passing a callback to the onClick event handler

function ClickButton() {
//   const handleClick = () => console.log("Ouch!");
//   const handleClick2 = (name)=>console.log(`${name} stop clicking me`);
//   return <button onClick={()=>handleClick2("Brocode")}>Click me</button>;

                        //another example
    // let count=0;
    // const handleClick = (name)=> {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time/s`)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };
    // return (<button onClick={()=>handleClick("BroCode")}>Click me</button>)
                        //another example
                        
//     const handleClick = (e) => e.target.textContent = "Ouch!";
//     return (<button onClick={(e) => handleClick(e)}>Click me</button>)
                        //another example

                    const handleClick = (e) => e.target.textContent = "Ouch!";
                    return(<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)
}

export default ClickButton;

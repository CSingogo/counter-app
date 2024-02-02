import React from "react"
export default function Counter(){
    const [count , setCount] = React.useState(0)

    const add = () => setCount(prevCount => prevCount + 1);

    const subtract = () => {

        if(count > 0){
            setCount(prevCount => prevCount - 1);
        }
        
    }
    
    
       
        

    return (
        <div className="container">
            <div className="screen">
              {count}
            </div>
            <button className="btn--add" onClick={add}>+</button>
            <button className="btn--subtract" onClick={subtract}>-</button>

        </div>
    )
}
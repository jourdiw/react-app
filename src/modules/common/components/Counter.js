import React, { useState, useEffect } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    // const [apiDate, setApiData] = useState({ loading: false, value: null})
    useEffect(()=> {document.title = `${count} hits`;})
    // ... which is componentDidMount & componentDidUpdate
    // if you return within useEffect, it is the same as componentWillUnmount
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
export default Counter
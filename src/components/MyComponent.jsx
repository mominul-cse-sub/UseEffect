import { useEffect, useState } from "react"


export default function MyComponent (){
    const [count, setCount] = useState(0);
    // const [text, setText] = useState("");
    const [date, setDate] = useState(new Date);

    useEffect(()=> {
        console.log("Count");
        document.title = `Clicked ${count} times`},[count])

    useEffect(()=> {
        console.log("Date");
        const interval = setInterval(tick,1000);
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        };
    },[])

    const addClick=()=>{
        console.log("Click");
        setCount ((prevCount) => prevCount + 1);
    }

    const tick = () => {
        console.log(`clock ticking!`);
        setDate(new Date());
    }



    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
            </p> */}
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}
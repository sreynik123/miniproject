
import tailwindConfig from "../tailwind.config";
import { useEffect, useState } from "react";
import DefaultCard from "./DefaultCard";

export default function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {
    {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [data]);
  return (
    <div className="grid grid-cols-4 gap-4">
      
      {data.map((d)=> (
        <DefaultCard title={d.title} body={d.body}/>
      ))}
    </div>
  );
}

// Define state
//  const [count, setCount] = useState(0)

// const increase = () => {
// Update state
// setCount(count + 1)
//     }

//     const decrease = () => {
//         // Update state
//         setCount(count - 1)
//     }

//     useEffect(() =>{
//      console.log('This is side effect')
//     },{count})

//     return (
//         < >
//             <h1>Welcome to React Hook</h1>
//             {/* Use State */}
//             <h1>{count}</h1>
//             <button onClick={increase}>Increase</button>
//             <button onClick={decrease} style={{color:'red'}}>Decrease</button>
//         </>
//     )
// }

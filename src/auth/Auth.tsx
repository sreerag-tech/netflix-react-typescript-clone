// import { useContext, Provider, createContext } from 'react';
// import { login, user };
import {useState} from 'react';
const [count, setCounter] = useState(0);

 
// const login = createContext();
const Component = ()=>{
    return(
        <>
            <h2>BR32</h2>
            <button onClick={()=>setCounter(count+1)}>+</button>
        </>
    )
}
export default Component;
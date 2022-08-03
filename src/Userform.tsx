import { useState } from "react";
interface Isprops {
    name:string,
    age:number,
    last:string, 
    email:string
}
const Userform = () => {
    const [state, setstate] = useState<Isprops>({
        name:"",
        last:'',
        email:"",
        age:0,
       

    })
    console.log("object",state);
    return (
        <div>
            <input type="text" onChange={(e)=>setstate({...state,name:e.target.value})} /><br/>
            <input type="text" onChange={(e)=>setstate({...state,last:e.target.value})} /><br/>
            <input type="text" onChange={(e)=>setstate({...state,email:e.target.value})} /><br/>
            <input type="number" onChange={(e:any)=>setstate({...state,age:e.target.value})} />
            
        </div>
    )
}

export default Userform;

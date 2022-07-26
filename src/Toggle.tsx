import React,{useState} from 'react'

const Togglebutton = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        <input type="checkbox" checked={toggle} onClick={(e:any)=>settoggle(e.target.toggle)}/>
        
    </div>
  )
}

export default Togglebutton
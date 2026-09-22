import { useState } from 'react'
export default function App(){
  const [booked,setBooked]=useState(null)
  const models=[
    {id:1,name:"Sophia",age:24,location:"Gaborone",price:"P500/hr",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"},
    {id:2,name:"Maya",age:22,location:"Francistown",price:"P400/hr",img:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400"},
    {id:3,name:"Amara",age:25,location:"Maun",price:"P600/hr",img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"}
  ]
  return (<div style={{fontFamily:'sans-serif',padding:'20px',background:'#111',minHeight:'100vh',color:'white'}}>
    <h1 style={{color:'#ff0066'}}>🔥 Service Hub - Models BW</h1>
    <p>Premium Models - Discreet & Private</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',marginTop:'20px'}}>
      {models.map(m=><div key={m.id} style={{background:'#222',borderRadius:'12px',overflow:'hidden'}}>
        <img src={m.img} style={{width:'100%',height:'300px',objectFit:'cover'}}/>
        <div style={{padding:'15px'}}><h3>{m.name}, {m.age}</h3><p>{m.location} - {m.price}</p>
        <button onClick={()=>setBooked(m.name)} style={{width:'100%',padding:'10px',background:'#ff0066',color:'white',border:'none',borderRadius:'8px',marginTop:'10px',fontWeight:'bold'}}>
          {booked===m.name?"✓ Booked!":"Book Now"}</button></div></div>)}
    </div>
    {booked&&<div style={{position:'fixed',bottom:'20px',right:'20px',background:'#ff0066',padding:'15px',borderRadius:'10px'}}>✅ {booked} booked! Check WhatsApp!</div>}
  </div>)
}

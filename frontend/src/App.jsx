import { useEffect, useState } from 'react';
export default function App(){
  const [services,setServices]=useState([]);
  useEffect(()=>{fetch('https://service-hub-backend.onrender.com/api/services').then(r=>r.json()).then(setServices).catch(()=>setServices([{name:"Plumbing"},{name:"Electrical"}]))},[]);
  return (<div style={{fontFamily:'sans-serif',padding:20}}>
    <h1>🔧 Service Hub - Botswana</h1>
    <p>Book plumbing, electrical, cleaning services with live tracking</p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
      {services.map((s,i)=><div key={i} style={{border:'1px solid #ccc',padding:15,borderRadius:8}}><h3>{s.name}</h3><p>P {s.price||500}</p><button onClick={()=>alert('Booking '+s.name)}>Book Now</button></div>)}
    </div>
    <hr/><h3>Features: Real-time tracking, WhatsApp notifications, Pay with Orange Money</h3>
  </div>);
}

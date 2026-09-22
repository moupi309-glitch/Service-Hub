import { useEffect, useState } from 'react';
export default function App(){
  const [models,setModels]=useState([]);
  useEffect(()=>{fetch('https://service-hub-backend.onrender.com/api/models').then(r=>r.json()).then(setModels).catch(()=>setModels([{name:'Sophia', age:22},{name:'Maya', age:23}]))},[])
  return (<div style={{fontFamily:'sans-serif', padding:'20px'}}>
<h1>🔥 Service Hub</h1>
<p>Connect with verified models for flirting, private chat & companionship - 18+ Only</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:'15px'}}>
  {models.map((s,i)=><div key={i} style={{border:'1px solid #ddd',padding:'15px',borderRadius:'10px'}}>
<h3>{s.name} • {s.age}</h3>
<p>💬 Flirting Chat | 📹 Private Chat | 🌹 Companionship</p>
<button style={{background:'#ff2a6d',color:'white',border:'none',padding:'8px 12px',borderRadius:'5px',width:'100%'}}>Chat Now</button>
</div>)}
</div>
<hr/>
<h3>Features: Verified 18+ Models, Secure Chat, Real-time</h3>
<div style={{background:'#f5f5f5',padding:'15px',borderRadius:'10px',marginTop:'15px'}}>
<h3>💳 International Payments</h3>
<p>💳 Visa | Mastercard | 🅿️ PayPal | 🍎 Apple Pay | GPay | 📱 Orange Money</p>
<p style={{fontSize:'12px',color:'#666'}}>18+ Only • Consensual Adults • Secure & Discreet</p>
</div>
</div>);
}

import { useState } from 'react';

const models = [
  { id:1, name:"Sophia", age:24, location:"Gaborone", price:500, image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { id:2, name:"Maya", age:22, location:"Francistown", price:450, image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" },
  { id:3, name:"Amara", age:25, location:"Maun", price:600, image:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400" },
];

export default function App(){
  const [payMethod, setPayMethod] = useState("Visa");
  return (
    <div style={{fontFamily:'sans-serif', background:'#111', color:'#fff', minHeight:'100vh', padding:'20px'}}>
      <h1 style={{color:'#ff0080'}}>🔥 Service Hub - Models BW</h1>
      <p>Premium Models in Botswana | Secure Payments</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))', gap:'20px', marginTop:'20px'}}>
        {models.map(m=>(
          <div key={m.id} style={{background:'#222', borderRadius:'15px', padding:'15px'}}>
            <img src={m.image} style={{width:'100%', height:'300px', objectFit:'cover', borderRadius:'10px'}} />
            <h3>{m.name}, {m.age}</h3>
            <p>📍 {m.location}</p>
            <p>💰 P{m.price}/hr</p>
            <select value={payMethod} onChange={e=>setPayMethod(e.target.value)} style={{width:'100%', padding:'10px', margin:'10px 0', borderRadius:'8px'}}>
              <option>Visa</option><option>Mastercard</option><option>PayPal</option><option>Orange Money</option><option>MyZaka</option><option>Smega</option><option>Bank Transfer</option>
            </select>
            <button style={{width:'100%', background:'#ff0080', color:'#fff', padding:'12px', border:'none', borderRadius:'8px', fontWeight:'bold'}}>Book {m.name} - Pay with {payMethod}</button>
          </div>
        ))}
      </div>
      <hr style={{margin:'30px 0'}}/>
      <h3>✅ Payments: Visa, Mastercard, PayPal, Orange Money, MyZaka, Smega</h3>
      <p>Admin: moupi309@gmail.com | Secure & Discreet</p>
    </div>
  );
}

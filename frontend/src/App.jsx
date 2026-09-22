import { useEffect, useState } from 'react';

export default function App(){
  const [models,setModels]=useState([]);
  const [page,setPage]=useState('models');
  const [payMethod,setPayMethod]=useState('Visa');

  const payments = ['Visa','Mastercard','PayPal','Apple Pay','Google Pay','Orange Money','MyZaka','Smega'];

  useEffect(()=>{
    fetch('https://service-hub-backend.onrender.com/api/models')
      .then(r=>r.json())
      .then(d=>setModels(d))
      .catch(()=>setModels([
        {id:1,name:'Sophia', age:22, city:'Gaborone', status:'Online', bio:'Private chat & companionship'},
        {id:2,name:'Maya', age:23, city:'Francistown', status:'Online', bio:'Flirting & video chat'},
        {id:3,name:'Amara', age:24, city:'Maun', status:'Offline', bio:'Companionship & events'},
      ]))
  },[])

  return (
    <div style={{fontFamily:'system-ui', maxWidth:1100, margin:'0 auto', padding:15}}>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'#111', color:'#fff', padding:'14px 18px', borderRadius:12}}>
        <b>🔥 Service Hub - Models BW</b>
        <div style={{fontSize:11, background:'#222', padding:'6px 10px', borderRadius:20}}>18+ Only • Verified</div>
      </header>

      <div style={{marginTop:20}}>
        <h1 style={{margin:'5px 0'}}>Verified Models for Private Chat & Companionship</h1>
        <p style={{color:'#666', fontSize:14}}>Connect with verified 18+ models for flirting, private chat & social companionship. Consensual adults only. Secure & discreet.</p>
        
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:15, marginTop:20}}>
          {models.map((m,i)=>(
            <div key={i} style={{border:'1px solid #e5e7eb', borderRadius:12, overflow:'hidden'}}>
              <div style={{height:160, background:'#f3f4f6', display:'flex', alignItems:'center', justifyContent:'center', fontSize:48}}>👤</div>
              <div style={{padding:12}}>
                <div style={{display:'flex', justifyContent:'space-between'}}><b>{m.name} • {m.age}</b><span style={{fontSize:11, color: m.status==='Online' ? '#16a34a' : '#888'}}>{m.status}</span></div>
                <div style={{fontSize:12, color:'#666'}}>{m.city} • {m.bio}</div>
                <div style={{fontSize:11, marginTop:6, color:'#444'}}>💬 Flirting Chat | 📹 Private Chat | 🌹 Companionship</div>
                <button onClick={()=>setPage('checkout')} style={{marginTop:10, width:'100%', padding:'8px', background:'#ff2a6d', color:'#fff', border:'none', borderRadius:8}}>View Profile / Chat</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{marginTop:25, background:'#f9fafb', border:'1px solid #e5e7eb', padding:15, borderRadius:12}}>
          <h3 style={{margin:'0 0 8px 0'}}>💳 International & Local Payments</h3>
          <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
            {payments.map(p=>(
              <span key={p} onClick={()=>setPayMethod(p)} style={{padding:'6px 12px', borderRadius:20, border: payMethod===p ? '2px solid #111' : '1px solid #ddd', background:'#fff', fontSize:12, cursor:'pointer'}}>{p}</span>
            ))}
          </div>
          <div style={{fontSize:11, color:'#666', marginTop:10}}>Secure checkout • Discreet billing • 18+ verification required • Comply with Botswana law & payment processor terms</div>
        </div>

        <div style={{marginTop:20, fontSize:11, color:'#888', textAlign:'center', lineHeight:'1.4'}}>
          18+ ONLY. All models are verified adults who have consented to be on platform. No explicit sexual services advertised. This platform is for social companionship, chatting and fan content. Users must comply with local laws. No minors allowed.
        </div>
      </div>
    </div>
  );
}

import express from 'express'; import cors from 'cors'; import { createServer } from 'http'; import { Server } from 'socket.io';
const app=express(); const httpServer=createServer(app);
const io=new Server(httpServer,{cors:{origin:"*"}});
app.use(cors()); app.use(express.json());
app.get('/',(req,res)=>res.json({status:"Service Hub Backend Live",services:["plumbing","electrical","cleaning"]}));
app.get('/api/services',(req,res)=>res.json([{id:1,name:"Plumbing",price:500},{id:2,name:"Electrical",price:600},{id:3,name:"Cleaning",price:400}]));
app.get('/api/bookings',(req,res)=>res.json([]));
io.on('connection',s=>{console.log('user connected'); s.on('track',d=>{s.emit('location',{lat:-22.38,lng:26.71})})});
const PORT=process.env.PORT||10000; httpServer.listen(PORT,()=>console.log('Backend running on '+PORT));

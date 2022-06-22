const path=require("path");
const express=require("express");
const app=express();
const socketio=require("socket.io");

app.set('port',process.env.PORT | 3000);

app.use(express.static(path.join(__dirname,'public')));

const srvr=app.listen(app.get('port'),()=>{
	console.log("server on port",app.get('port'));
});

const io=socketio(srvr);

io.on("connection",(s)=>{
	s.on("ch",(data)=>{
		io.sockets.emit("ch",data);
	});
	s.on("ct",(data)=>{
		s.broadcast.emit("ct",data);
	});
	console.log("new connection ",s.id);
});

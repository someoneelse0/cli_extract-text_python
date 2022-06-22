console.log("h");
const sockt=io();
let m=document.getElementById("message");
let u=document.getElementById("username");
let btn=document.getElementsByTagName("button")[0];
let o=document.getElementById("o");
let a=document.getElementById("actions");
btn.addEventListener("click",function(){
	sockt.emit("ch",{
		username:u.value,
		message:m.value
	});
});
m.addEventListener("keypress",function(){
	sockt.emit("ct",username.value);
});
sockt.on("ch",function(data){
	o.innerHTML+=data.message+"<br>";
});
sockt.on("ct",(data)=>{
	o.innerHTML=data+" is typing";
});

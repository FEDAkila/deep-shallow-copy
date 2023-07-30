
let laptop=[{Brand:"hp",processer:"i3",ram:"8Gb",os:"windows 11" ,id:"1"},
			{Brand:"dell",processer:"i5",ram:"2Gb",os:"windows 7",id:"3"},
			{Brand:"lenovo",processer:"i5",ram:"4Gb",os:"windows 10", id:"2"},
			{Brand:"apple",processer:"i7",ram:"8Gb",os:"windows 11",id:"5"},
			{Brand:"infinix",processer:"i3",ram:"8Gb",os:"windows 10",id:"6"}]



// let b=laptop.map((v)=>{
		// return v.ram
// })
// console.log(b);

// let c=laptop.map((v,i)=>{
	// return v.os=="windows 10"? {...v,os:"windows 5"} : v
	// })
// console.log(c)

// let d=laptop.filter((v,i)=>{
	// return v.id>3
// })
// console.log(d);

// let d=laptop.find((a)=>{
	// return a.id>3
// });
// console.log(d);



	function shallowcopy(){
		var ans=document.getElementById("ans");
		ans.setAttribute("class","bg-dark text-white p-2 my-3")
		ans.innerHTML="Let x=[1,2,3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let y=x;<br>x.push(4);<br>console.log(x,y);<br>output:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=[1,2,3,4]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y:[1,2,3,4];"
	}

function deepcopy(){
		var answer=document.getElementById("answer");
		answer.setAttribute("class","bg-dark text-white p-2 my-3")
		answer.innerHTML="Let x=5;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let  y=x;<br>x=10<br>Console.log(x,y);<br>output:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=10<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y=5"
		
}
function covert(){
	var shed1=document.getElementById("shed1");
	 shed1.setAttribute("class","bg-dark text-white p-2 mt-3");
	 var shed2=document.getElementById("shed2");
	 shed2.setAttribute("class","bg-dark text-white p-2 mt-3");
	 var shed3=document.getElementById("shed3");
	 shed3.setAttribute("class","bg-dark text-white p-2 mt-3");
	var head=document.createElement("h5");
	 head.setAttribute("class","text-warning");
	 head.innerHTML="Spread Opeartor";
	 shed1.append(head);
	 var head1=document.createElement("h5");
	 head1.setAttribute("class","text-warning");
	 head1.innerHTML="Object.assign";
	 shed2.append(head1);
	 var head3=document.createElement("h5");
	 head3.setAttribute("class","text-warning");
	 head3.innerHTML="Json.parse/stringfy";
	 shed3.append(head3);
	 var method1=document.createElement("div");
	 method1.setAttribute("class","bg-dark text-white p-2 mt-3")
	shed1.append(method1);
method1.innerHTML="Let x=[1,2,3];&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let y=[...x]<br>x.push(4);<br>Console.log(x,y);<br>output:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=[1,2,3,4]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y=[1,2,3]"
	 var method2=document.createElement("div");
	 method2.setAttribute("class","bg-dark text-white p-2 mt-3")
	shed2.append(method2);	
	method2.innerHTML="Let x=[1,2,3];&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; let y=Object.assign({},x);<br>Console.log(x,y);<br>output:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=[1,2,3]<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y={1,2,3}"
 var method3=document.createElement("div");
	 method3.setAttribute("class","bg-dark text-white p-2 mt-3")
	shed3.append(method3);	
	method3.innerHTML=" var original=[{'a':1},{'b':1}];&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var copy=JSON.parse(JSON.stringify(original));<br>Console.log(copy);<br>output:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[{a:1},{b:2}]";

}




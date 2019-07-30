var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");


var dataJson="data.json";
var userJson="user.json";
var urlencoded=bodyParser.urlencoded({extended:false});
//var postparse=bodyParser.urlencoded({extended:false});//1
//app.use(postparse);//2
//app.use(bodyParser.json());//3
app.use("*", function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});
app.use(express.static("./"));

app.post("/login",bodyParser.json(),(req,res)=>{
	var obj=req.body;
	console.log("/login obj:",obj);
	fs.readFile("./data.json",(err,data)=>{
		if(err){
			res.send({error:1});
		}else{
			let arr=JSON.parse(data);
			for(var o in arr){
				if(arr[o].phone==obj.phone&&arr[o].pwd==obj.pwd){
					res.send({login:0});
					return;
				}
			}
			res.send({login:1})
		}
	})
})



//addPost
app.post("/addPostStr",urlencoded,(req,res)=>{
	var obj=req.body;
	console.log("/addPost obj:",obj);
	fs.readFile(dataJson,(err,data)=>{
		if(err){
			console.log("3err:",err);
			res.send({error:3});
		}else{
			var arr=JSON.parse(data.toString());
			obj.id=new Date().getTime()+"";
			arr.unshift(obj);
			var str=JSON.stringify(arr);
			fs.writeFile(dataJson,str,err=>{
				if(err){
					console.log("4err",err);
					res.send({error:4});
				}else{
					res.send({success:0});
				}
			})
		}
	})
})

//addPost
app.post("/addPost",bodyParser.json(),(req,res)=>{
	var obj=req.body;
	console.log("/addPost obj:",obj);
	fs.readFile(dataJson,(err,data)=>{
		if(err){
			console.log("3err:",err);
			res.send({error:3});
		}else{
			var arr=JSON.parse(data.toString());
			obj.id=new Date().getTime()+"";
			arr.unshift(obj);
			var str=JSON.stringify(arr);
			fs.writeFile(dataJson,str,err=>{
				if(err){
					console.log("4err",err);
					res.send({error:4});
				}else{
					res.send({success:0});
				}
			})
		}
	})
})


//addGet2
app.get("/addGet2/:phone/:pwd",(req,res)=>{
	var obj=req.params;
	console.log("/addGet2 obj:",obj);
	fs.readFile(dataJson,(err,data)=>{
		if(err){
			console.log("5err:",err);
			res.send({error:5});
		}else{
			var arr=JSON.parse(data.toString());
			obj.id=new Date().getTime()+"";
			arr.unshift(obj);
			var str=JSON.stringify(arr);
			fs.writeFile(dataJson,str,err=>{
				if(err){
					console.log("6err",err);
					res.send({error:6});
				}else{
					res.send({success:0});
				}
			})
		}
	})
})
//addGet
app.get("/addGet",(req,res)=>{
	var obj=req.query;
	console.log("/addGet obj:",obj);
	fs.readFile(dataJson,(err,data)=>{
		if(err){
			console.log("1err:",err);
			res.send({error:1});
		}else{
			var arr=JSON.parse(data.toString());
			obj.id=new Date().getTime()+"";
			arr.unshift(obj);
			var str=JSON.stringify(arr);
			fs.writeFile(dataJson,str,err=>{
				if(err){
					console.log("2err",err);
					res.send({error:2});
				}else{
					res.send({success:0});
				}
			})
		}
	})
});

//getDataUser
app.get("/getDataUser",(req,res)=>{
	console.log("getDataUser");
	setTimeout(()=>{
		res.sendFile(__dirname+"/"+userJson);
	},3000);
/*	fs.readFile(userJson,(err,data)=>{
		if(err){
			res.send({error:7})
		}else{
			res.send({user:data.toString()});
		}
	})*/
})
//getData
app.get("/getData",(req,res)=>{
	console.log("getData");
	setTimeout(()=>{
		res.sendFile(__dirname+"/"+dataJson);
	},3000);
/*	fs.readFile(dataJson,(err,data)=>{
		if(err){
			res.send({error:8})
		}else{
			res.send({data:data.toString()});
		}
	})*/
})

//get删除接口
app.get("/del/:id", function (req, res) {
	const id = req.params.id;
	console.log(id);
	fs.readFile(dataJson, function (err, data) {
		if (err) {
			res.send({
				err: 3
			});
		} else {
			var str = data.toString();
			var arr = JSON.parse(str);
			let resultArr = arr.filter((item, i) => {
				return item.id !== id
			})

			fs.writeFile(dataJson, JSON.stringify(resultArr), function (err) {
				if (err) {
					res.send({
						s: 2
					})
				} else {
					res.send({
						s: 0
					})
				}
			})
		}
	})
});
//delPostStr删除接口
app.post("/delPostStr",urlencoded,(req,res)=>{
	var obj=req.body;
	console.log("/delPostStr obj:",obj);
	fs.readFile(dataJson,(err,data)=>{
		if(err){
			console.log("3err:",err);
			res.send({error:3});
		}else{
			var arr=JSON.parse(data.toString());
			for(var i=0;i<arr.length;i++){
				if(obj.id===arr[i].id){
					arr.splice(i,1);
					break;
				}
			}
			
			var str=JSON.stringify(arr);
			fs.writeFile(dataJson,str,err=>{
				if(err){
					console.log("4err",err);
					res.send({error:4});
				}else{
					res.send({success:0});
				}
			})
		}
	})
});
//主页
app.get("/",(req,res)=>{
	//res.redirect(302,"/"+page);
	res.send("这是后台");
//	fs.readdir("./",(err,data)=>{
//		if(err){
//			console.log("err:",err)
//		}else{
//			//console.log("data:",data);
//			let f=true;
//			let str="<h2>首页</h2>";
//			for(let i=0;i<data.length;i++){
//				let arr=data[i].split(".");
//				if(arr[1]=="html"){
//					str+="<a href="+data[i]+"> "+arr[0]+" </a><br/><br/>";
//					f=false;
//				}
//			}
//			if(f){
//				str="没有要访问的页面";
//			}
//			res.send(str);
//		}
//	})
})

app.listen(80,()=>{
	console.log("OK 80");
})

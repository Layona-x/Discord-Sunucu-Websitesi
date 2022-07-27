/* Webisite */
const express = require("express");
const app = express();
const ejs = require('ejs')
app.set("view engine","ejs")
app.use(express.static("public"))
const bodyParser = require("body-parser");
app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
); 

app.listen(3000) 
const discord = require('discord.js')
const client = new discord.Client()
client.login(process.env.token)
client.on('ready',() => {
  console.log("Djs Hazır ")
})
app.get('/',function(req,res){
res.render("anasayfa")
})
app.get('/basvuru',function(req,res){
  res.render("başvuru")
})
app.post('/',function(req,res){
  let user = client.users.cache.get(req.body.id)
  let isim = req.body.isim
  let yas = req.body.yas
  let ilgi = req.body.ilgi
  let yt = req.body.yetki
   const basvur = new discord.MessageEmbed()
  .setThumbnail(user.avatarURL({dynamic: true}))
  .setTitle("Bir Kullanıcı Başvuru İstedi")
  .addField("Kullanıcı IDsi",req.body.id,true)
  .addField("Kullanıcı İsmi",isim,true)
  .addField("Kullanıcı Yaşı ",yas,true)
  .addField("İlgilendiği Alan Dil vs...",ilgi,true)
  .addField("İstenilen Yetki",yt,true)
  .setTimestamp()
  .setColor("#CCFF66")
   res.render("successb")
  client.channels.cache.get("999897399277387897") .send(basvur)
})
app.get("/register",function(req,res){
res.render("reg")
})

 app.post('/',function(req,res){
let user = client.users.cache.get(req.body.fName)
let isimg = req.body.lName;
let yas = req.body.guest;
let isim = user.username
res.redirect("https://discord.gg/F5pSKpEMMC")
const giris = new discord.MessageEmbed()
  .setThumbnail(user.avatarURL({dynamic: true}))
  .setTitle("Bir Kullanıcı Kayıt İstedi")
  .addField("Kullanıcı IDsi",req.body.fName,true)
  .addField("Kullanıcı İsmi",isim,true)
  .addField("Kullanıcı Yaşı ",yas,true)
  .addField("Real Kullanıcı İsmi",isimg,true)
  .setTimestamp()
  .setColor("#CCFF66")
   
   client.channels.cache.get("997914728607273112") .send(giris)
client.guilds.cache.get("997888625888997557").members.cache.get(user.id).roles.remove("997907213249163274")
client.guilds.cache.get("997888625888997557").members.cache.get(user.id).roles.add("997906904531599440")
})
app.get('/owners',function(req,res){
  let owner1 = client.users.cache.get("920315243106795570")
  let avatar1 = owner1.avatarURL({dynmaic:true})
  let name1 = owner1.username
  let status1 = owner1.presence.status
  let game1 = owner1.presence.status.game
  let durum1 = owner1.status
    let owner2 = client.users.cache.get("543746485456470026")
  let avatar2 = owner2.avatarURL({dynmaic:true})
  let name2 = owner2.username
  let status2 = owner2.presence.status
  let game2 = owner2.presence.status.game
  let durum2 = owner2.status
  let owner3 = client.users.cache.get("993754501104279592")
  let avatar3 = owner3.avatarURL({dynmaic:true})
  let name3 = owner3.username
  let status3 = owner3.presence.status
  let game3 = owner3.presence.status.game
  let durum3 = owner3.status
  res.render("owners",{avatar1,name1,status1,game1,durum1,avatar2,name2,status2,game2,durum2,avatar3,status3,game3,name3,durum3})
})
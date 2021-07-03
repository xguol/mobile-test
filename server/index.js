/*
 * @Author: your name
 * @Date: 2021-07-02 17:42:27
 * @LastEditTime: 2021-07-03 11:54:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\server\index.js
 */

let Koa = require("koa");
let app = new Koa();
let server = require("http").Server(app.callback());
let io = require("socket.io")(server);
 
io.on("connection", function(socket){
    console.log("server connecting");
    socket.on("clientMsg", (data)=>{
        console.log(data)
        socket.emit("serverMsg", "your message");
    })
    socket.emit("serverMsg", "your message");
});
app.use(async ctx => {
    ctx.body = 'Hello World';
  })
 
server.listen(8020, ()=>{
    console.log("ws listening on 8081");
});
/*
 * @Author: your name
 * @Date: 2021-07-02 17:50:28
 * @LastEditTime: 2021-07-03 11:34:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mobile-vue\src\http\socket.js
 */
import { io } from 'socket.io-client'
const socket = io('/abc');

socket.on('serverMsg', () => {
  console.log('connect!');
  socket.emit('clientMsg', 'addCart');
});

// socket.on('serverMsg', msg => {
//   console.log('Msg from server:', msg);
//   socket.emit('clientMsg', 'addCart');
// })
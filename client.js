/**
 * Establishes connection with the game server
 */
const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  conn.on("connect", () => {
    console.log("Connection to game server established!");
    conn.write("Name: BUN");
    //conn.write("Move: up") will move the snake up automatically everytime we connect so we're not going to write it this way
    

  });

  conn.on("data", (data) => {
    console.log(data);
});
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = {
  connect
}
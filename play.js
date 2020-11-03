const { connect } =require('./client');
console.log('Connecting ...');

const { setupInput } = require('./input');
let connectionObj = connect();
setupInput(connectionObj);
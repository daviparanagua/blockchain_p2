const {Block, Blockchain} = require('./simpleChain')

let bc = new Blockchain()
bc.addBlock(new Block({'value': 'first'}))
bc.addBlock(new Block({'value': 'second'}))

console.log(bc)
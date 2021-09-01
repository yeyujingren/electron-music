const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;
const TRY_TIMES = 10;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({ port: port }, () => {
  client.end();
  if (!startedElectron) {
    console.log('starting electron');
    startedElectron = true;
    const exec = require('child_process').exec;
    exec('npm run electron');
  }
});

tryConnection();

let reTryTime = 0;

client.on('error', (error) => {
  if (reTryTime < TRY_TIMES) {
    console.log('try again ...', error);
    setTimeout(tryConnection, 1000);
    reTryTime ++;
  }
});
import io from 'socket.io-client';


const ioProxy = {
  autoConnect: false,
};
const ioCfg = {
  isConnect: false,
};
const socket = io('ws://localhost:9101', ioProxy);

socket.on('connect', () => {
  ioCfg.isConnect = true;
});

socket.on('error', (error) => {
  console.log(error);
});


socket.on('connect_error', (error) => {
  console.log(error);
});

socket.on('connect_timeout', () => {

});

socket.on('disconnect', (reason) => {
  console.log(reason);
  ioCfg.isConnect = false;
});

export function open() {
  if (!ioCfg.isConnect) {
    socket.open();
  }
}

export function dispath(msg, data) {
  if (ioCfg.isConnect === false) {
    socket.emit(msg, JSON.stringify(data));
  }
}

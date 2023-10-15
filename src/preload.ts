// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer} = require('electron')

export {};
declare global {
  interface Window {
    isElectron:any
    ipcRenderer:Electron.IpcRenderer
  }
}

function init() {
  // add global variables to your web page
  window.isElectron = true
  window.ipcRenderer = ipcRenderer
}
init();

window.ipcRenderer.on('pong', (event, msg) => console.log(msg));
window.ipcRenderer.on("checking-update",(event,msg)=>{
  console.log(msg);
});
window.ipcRenderer.on("update-not-available",(event,msg)=>{
  console.log(msg);
});

window.ipcRenderer.on("update-error",(event,msg)=>{
  console.log(`업데이트 에러 메세지:${msg}`);
});

window.ipcRenderer.on("update-download-progress",(event,msg)=>{
  console.log(`업데이트 진행율:${msg}`);
});

window.ipcRenderer.on("update-available",(event,msg)=>{
  console.log(`업데이트 진행율:${msg}`);
});

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title:any) => ipcRenderer.send('set-title', title)
});

contextBridge.exposeInMainWorld('file', {
  openDirectory:async (fileName:string,fileUrl:string) => {
    ipcRenderer.send('openDirectory',fileName,fileUrl);
  }
});

contextBridge.exposeInMainWorld('ping', {
  main:async (message:string) => {
    ipcRenderer.send('ping',message);
  }
});

contextBridge.exposeInMainWorld('bridge', {
  updataMessage:(callback:any) => {
    ipcRenderer.on("updateMessage",callback);
  }
});
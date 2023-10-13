// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title:any) => ipcRenderer.send('set-title', title)
});

contextBridge.exposeInMainWorld('file', {
  openDirectory:async (fileName:string,fileUrl:string) => {
    ipcRenderer.send('openDirectory',fileName,fileUrl);
  }
})
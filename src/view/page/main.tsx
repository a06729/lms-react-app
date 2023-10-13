import Button from '@mui/material/Button';
import React, { useState } from 'react';
declare global {
    interface Window {
        electronAPI:any;
        file:any;
    }
}




function Main(){
    const [fileName, setfileName] = useState('');
    const [fileUrl,setFileUrl]=useState('');
    const fileNameChange=(e: React.FormEvent<HTMLInputElement>)=>{
        const fileName=e.currentTarget.value;
        
        console.log(e.currentTarget.value);
        
        setfileName(fileName);
    }
    const fileUrlChange=(e: React.FormEvent<HTMLInputElement>)=>{
        const fileUrl=e.currentTarget.value;
        console.log(fileUrl);
        setFileUrl(fileUrl);
    }

    return(
        <div>
            <input type="text" onChange={fileNameChange} placeholder="파일이름" />
            <input type="text" onChange={fileUrlChange} placeholder='url주소'/>
            <Button variant="outlined" onClick={()=>{
                clickfnc(fileName,fileUrl);
            }}>다운로드</Button>
        </div>
    );
}


function clickfnc(fileName:string,fileUrl:string){
    window.file.openDirectory(fileName,fileUrl);
}

export default Main;
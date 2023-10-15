import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState,useEffect } from 'react';
declare global {
    interface Window {
        electronAPI:any;
        file:any;
        bridge:any;
        ping:any;
    }
}

function Main(){
    const [fileName, setfileName] = useState('');
    const [fileUrl,setFileUrl]=useState('');
    const fileNameChange=(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const fileName=e.currentTarget.value;
        
        console.log(e.currentTarget.value);
        
        setfileName(fileName);
    }
    const fileUrlChange=(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const fileUrl=e.currentTarget.value;
        console.log(fileUrl);
        setFileUrl(fileUrl);
    }
    return(
        <div>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="파일이름" variant="outlined" onChange={fileNameChange} />
                <TextField id="outlined-basic" label="url주소" variant="outlined" onChange={fileUrlChange} />
                <Button variant="outlined" onClick={()=>{
                    clickfnc(fileName,fileUrl);
                }}>다운로드</Button>
                <Button variant="outlined" onClick={()=>{
                   window.ping.main("ping");
                }}>테스트 버튼</Button>
            </Stack>
        </div>
    );
}


function clickfnc(fileName:string,fileUrl:string){
    window.file.openDirectory(fileName,fileUrl);
}

export default Main;
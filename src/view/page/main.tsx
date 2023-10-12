declare global {
    interface Window {
        electronAPI:any;
    }
}

function Main(){
    return(
        <div>
            <input type="text" placeholder="이름" />
            <button onClick={clickfnc}>버튼</button>
        </div>
    );
}

function clickfnc(){
    window.electronAPI.setTitle("test")
}

export default Main;
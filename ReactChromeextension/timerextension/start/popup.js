const timeElement=document.getElementById('time')
const showName=document.getElementById("your-name")
const timerElement=document.getElementById('timer')

function updateTimeElements(){
    
  chrome.storage.local.get(["timer"],(res)=>{
        const time=res.timer ?? 0
        timerElement.innerText=`The timer is at ${time} seconds`
        
    })
    const currentTime=new Date().toLocaleTimeString()
timeElement.textContent=`the time is :${currentTime}`

}
updateTimeElements()
setInterval(updateTimeElements,1000)




chrome.storage.sync.get(["name"],(res)=>{
   const name=res.name ?? "???"

   showName.textContent=`your name is ${name}`
    
})
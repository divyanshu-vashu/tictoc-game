function openplayerconfig(event){
    // const selectorplayerid =event.target.dataset.playerid;
    editedplayer=+event.target.dataset.playerid;
    // editedplayer=selectorplayerid;
    playerconfigoverlays.style.display='block';
    backdrop.style.display='block';

}
function closeplayerconfig () {
    playerconfigoverlays.style.display='none';
    backdrop.style.display='none';
    form.firstElementChild.classList.remove('error');
    errorOutputElement.textContent='';
    backdrop.style.display='none';
    form.firstElementChild.lastElementChild.value='';
    
}

function savePlayerConfig(){
    event.preventDefault();
    const formdata =new FormData(event.target);
    const enteredplayername =formdata.get('playername').trim();
    console.log(enteredplayername);

    if(!enteredplayername){
        event.target.firstElementChild.classList.add('error');
         errorOutputElement.textContent="please enter the valid name!";
         return;
    }
    const updatedplayerdata =document.getElementById('player-'+editedplayer+'-data');
    updatedplayerdata.children[1].textContent=enteredplayername;

    // if(editedplayer ==1){
    //     player[0].name=enteredplayername;
    // }
    player[editedplayer-1].name=enteredplayername;
    closeplayerconfig();


}
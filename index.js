


function searchEmoji(){
    console.log('hello');
    let outputdiv=document.getElementById('output');
    outputdiv.innerHTML=" ";
    let input=document.getElementById('input').value;

    for(let i=0;i<emojiList.length;i++){
        let result=emojiList[i].tags.includes(input.toLowerCase());
        console.log(result);
        if(result==true){
            outputdiv.innerHTML += `
            <div class="outputResult">
            <p class="emoji">${emojiList[i].emoji}</p>
            <p class="aliases">${emojiList[i].aliases}</p>
            <p class="description">${emojiList[i].description}</p>
            
            </div>
            <hr>
            `
        }
    }

}


function searchEmojikeyUp(){
    let outputdiv=document.getElementById('output');
    outputdiv.innerHTML=" ";
    let input=document.getElementById('input').value;

    emojiList.map((ele)=>{
        ele.tags.map((ele1)=>{
            let result=ele1.startsWith(input.toLowerCase());
        // console.log(result);
        if(result==true){
            outputdiv.innerHTML += `
            <div class="outputResult">
            <p class="emoji">${ele.emoji}</p>
            <p class="aliases">${ele.aliases}</p>
            <p class="description">${ele.description}</p>
            
            </div>
            <hr>
            `
        }
        })
    })
}
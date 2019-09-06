const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    
fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            return (
                messageOne.textContent = "Error " + data.error,
                messageTwo.textContent  = ' ',
                messageThree.textContent = ' '
                   )
        }

        messageOne.textContent = "Temperature "+ data.temperature;
        messageTwo.textContent = "PrecipProbability "+ data.precipProbability;
        messageThree.textContent = "Location "+ data.location;
    })
})
})
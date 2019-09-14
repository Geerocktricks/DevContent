// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById('hobbies-result');
const transportResult = document.getElementById('transport-result');
const musicResult = document.getElementById('music-result');

const sportsCheckbox = document.getElementById('sports-checkbox');
const gamesCheckbox = document.getElementById('games-checkbox');
const musicCheckbox = document.getElementById('music-checkbox')
const hobbiesList = document.querySelector('secondaryText');
const transportRadio = document.getElementsByName('transport-method');
const musicDropDown = document.getElementById('music-preference');

sportsCheckbox.addEventListener('change', ($event) => {
    console.log("Sports!");
    if ($event.target.checked){
        hobbiesResult.children[0].classList.remove('text-secondary');
    }else{
        hobbiesResult.children[0].classList.add('text-secondary')
    }
})

gamesCheckbox.addEventListener('change', ($event) => {
    console.log("Video games!");
    if ($event.target.checked){
        hobbiesResult.children[1].classList.remove('text-secondary');
    } else{
        hobbiesResult.children[1].classList.add('text-secondary');
    }
})

musicCheckbox.addEventListener('change', ($event) => {
    console.log("Music!");
   if ($event.target.checked){
       hobbiesResult.children[2].classList.remove('text-secondary');
   } else{
    hobbiesResult.children[2].classList.add('text-secondary');
   }
});

/*
*RADIO BUTTONS
*/
for (let i = 0; i < transportRadio.length;i++){
    transportRadio[i].addEventListener('change' , ($event) => {
        transportResult.textContent = $event.target.value;
    })
}
// MAKING A DEFAULT VALUE TO DISPLAY FROM DROPDOWN

musicResult.textContent = musicDropDown.value;


/*
* DROPDOWN MENU LISTENER
 */

musicDropDown.addEventListener('change', ($event) => {
    musicResult.textContent = $event.target.value;
})
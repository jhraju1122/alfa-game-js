// function play(){
// //step-1: hide the home screen.to hide the screen add the class hidden to the home section .
// .....................................
//  const homeSection = document.getElementById('home-screen');
//  homeSection.classList.add('hidden');
// //  console.log(homeSection.classList);

//  //step-1: Show the Play-Ground section.to show the screen remove the class hidden to the Play-Ground section .
//  const PlayGroundSection = document.getElementById('Play-Ground');
// ........................................... 
//  PlayGroundSection.classList.remove('hidden');
//  console.log(PlayGroundSection.classList);
// }


// Play the whole game Brain part 
function play(){
    hideElementByid('home-screen');
    showElementById('Play-Ground');
   //  set random generate alphabet to show screen
   const random = getARandomAlphabet();
   document.getElementById('current-alphabet').innerText = random

   continueGame()
}


// get or create an alphabet array.....
   function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    
    //get a random index between 0-25 in alphabet
    const randomNumber  = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
 }


// continue Game 
function continueGame(){
    const alphabet = getARandomAlphabet();
   //  console.log('your random alphabet',alphabet);
const currentAlphabet = document.getElementById('current-alphabet');
currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);

}

 //key board button press/////
  function handleKeyboardButtonPress(event){
   const playerPressed = event.key;
    console.log('player pressed', playerPressed);

   //  get the expected to press 
   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed, currentAlphabet);

   //cheked matched or not
   if(playerPressed === expectedAlphabet){
      console.log('you get a point');
      console.log('you have pressed correctedly', expectedAlphabet);
      removeBackgroundColorById(expectedAlphabet);
      continueGame();
   }
   else{
      console.log('!you missed, you loss a point');
   }

  }
  //capture keyboard key press
  document.addEventListener('keyup',handleKeyboardButtonPress);


//   Linkup Screen letter with keyboard////
// Step -1: Set Background color of keyboard button according to the screen letter
 
 
 

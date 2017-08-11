//add event listener for generate button

var generate = document.getElementById("generate");
generate.addEventListener("click", genBlocks());


//the function that executes when the generate button is clicked (and on page load)

function genBlocks() {
    
    //generate colour array every time the function runs
    
    var colourArray = ['red', 'orange', 'yellow', 'green', 'blue'];
    var blockArray = ['block1', 'block2', 'block3', 'block4', 'block5'];
    
    //assign a random colour to each block
    
    //genDirective(colourArray); I ended up not using this function
    
    var colIndex = 0;
    var bIndex = 0;
    var colRandom;
    
    while (colourArray.length > 0) {

        bIndex++;
        
        console.log (bIndex); //used for debugging

        //choose the block+nth block
        var blockElement = document.getElementById('block' + bIndex);
        
        //choose a random index for colourArray
        colIndex = Math.floor(Math.random() * colourArray.length);

        //choose a random colour that corresponds to that index
        colRandom = colourArray[colIndex];

        console.log(colRandom); //used for debugging

        //the chosen block is given the class that corresponds to the random colour
        blockElement.classList.add(colRandom);
        
        //the chosen colour is removed from the array
        colourArray.splice(colIndex, 1);

        console.log(blockElement.classList); //used for debugging
     
    }

}


//------------------------------------------------------------

//Here's some code I didn't end up using but I'm really proud of it because it took me 4 hours
//to debug it and get it working so I'm including it to show I can do logic


//Choose which colour is the 'correct' colour (generate the directive for the user)

//function genDirective (colourArray) {
//    
//    var colourArray = ['red', 'orange', 'yellow', 'green', 'blue'];
//    
//    var dirIndex;
//    var dirRandom;
//    var correct;
//    
//    //choose a random index for colourArray
//    dirIndex = Math.floor(Math.random() * colourArray.length);
//
//    //choose a random colour that corresponds to that index
//    dirRandom = colourArray[dirIndex];
//
//    console.log(dirRandom + ' is the correct colour');
//    
//    correct = dirRandom;
//
//    "Click the [correct] colour block" would then be displayed in a div using innerHTML
//}


//Set an onclick event for each block (this one was tough to get to work)

//    var blockArray = ['block1', 'block2', 'block3', 'block4', 'block5'];
//    for (var i = 0 ; i < blockArray.length ; ++i) {
//        var listenItem = blockArray[i];
//        listenItem.onclick = onClick();
//        console.log (i);
//    }

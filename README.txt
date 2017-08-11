Simple Coloured Blocks Generator

---------------------------------

WHAT'S SUPPOSED TO HAPPEN?

    -The user clicks the 'generate' button. Each block is given one of the following colours: red, orange, yellow, green, or blue. Whenever the user clicks the generate button, each block is given a new colour.
    
---------------------------------

WHY DOES THIS MATTER?

    -It's good practise for working with arrays and assigning random values to items within arrays. It was also a pretty great workout for my brain because the logic was tough to figure out at times. This kind of thing can form the basis for really simple games.
    
---------------------------------
    
HOW DID YOU DO IT?

    -Set out a simple HTML document with five blocks numbered 1 to 5. Create a button that allows the user to randomise the blocks' colours.
    
    -Create an event listener to capture the user's click on the generate button.
    
    -Create the function that executes when the generate button is clicked.
    
        -Define the two arrays: the block array, with all five blocks, and the colour array, with colours red to blue.
        
        -Create a while loop:
        
            -while there are still items within colourArray,
            
                -choose the first block

                -choose a random colour

                -assign the random colour to the first block

                -then remove that colour from colourArray
        
            -so that while loop continues until every block has been assigned a different colour from colourArray, randomly
            
    -Now every time you click the generate button, a random colour from colourArray is given to each block.
    
---------------------------------
    
LET'S GET REAL FOR A SECOND

    What I originally wanted to do was have a directive telling the user to click a block of a particular colour (the 'correct' colour). If the user clicked the correct block, a success message would be displayed. If the user clicked an incorrect block, a failure message would be displayed.
    
    This didn't end up working out because I couldn't figure out how to execute an action based off of which element had been clicked. As far as I could tell it had something to do with using a different parameter for each block, but the exact logic escaped me.
    
    However, I did work for like four hours on trying to get that part working, and I would have been successful if I'd managed to figure out that one missing piece. The rest of the logic is easy:
    
        -define a random colour as the 'correct' colour by giving it a class of 'correct'

        -display a message telling the user to click that colour block

        -onclick of any block, get its classlist

            -if it has a class of 'correct', display the success message

            -if it does not have a class of 'correct', display the failure message
    
    Another problem that this introduces is that the classlist for each block would need to be cleared every time the button is pressed in order to avoid multiple blocks being designated as 'correct'. I spent 45 minutes trying to code a function that would do that for me, and didn't quite manage to succeed.
    
    So basically I got in over my head and had to cut out like 4 hours of work so that my program actually functioned. But I'm really proud of that 4 hours of work so I decided to let you know.
// General program planning
// 1-get a text from user
// 2-getting the word that the user wants to search
// loop:
//      searching for value 
//      substituting X or A for value
//      continuation
// Convert the entire text to a list of letters
// Attaching the span tag to an index before the indexed list elements and closing it at the end
// Convert the entire text to a string



let text = ''
// This function sets the value of the let text
function onClickForText(){
    const textInput = document.getElementById('text-selected').value
    // text validation
    if (!textInput || textInput.startsWith(' ') ){
        alert('type a text !')
    }else{
        // sets text in the window
        document.getElementById('text-box').innerHTML = textInput
        text = textInput
        document.getElementById('search-console').style.display = 'block'
    }
    
}
// this function deletes the value of the let text
function onClickForTextDelete(){
    text = ''
    document.getElementById('text-box').innerHTML = ''
    document.getElementById('search-console').style.display = 'none'
}

// this function searches the value of the search-word input value 
function searchConsoleButton(){
    const textInput = document.getElementById('search-word').value
    // regExp
    const rX = new RegExp(textInput, 'gi')
    const rXForRep = new RegExp(textInput, 'i')

    // findes for count of searched value
    const countLoop = text.match(rX) // => ['text', 'text', ...]  we need length of this list
    
    // This value holds the result of substituting X or A for mainText
    let str = text

    // This list holds the indexes of value that was searched into main text 
    const indexes = []

    // this section for showing the count of values that exist
    document.getElementById('found-item').style.display='inline'
    let foundText = ''
    if (countLoop){
        foundText = `found <span style="text-decoration:underline">${countLoop.length}</span> ${countLoop.length>1?'items':'item'}`
    }else{
        foundText = 'not found'
    }
    document.getElementById('found-item').innerHTML = foundText

    // Looping to the number of countLoop list elements
    for (let x in countLoop){
        // searching According to regExp => /value/gi
        const i = str.search(rX) // => indexNumber e.g=> 0

        // pushing on the indexes list
        indexes.push(i)

        // this value containes X or A
        let replace_str = ''

        // looping according to text input character
        // This loop is for controlling single letter searches
        for (let char in textInput){
            if(textInput.toUpperCase() == 'X'){
                replace_str+='A'
            }else{
                replace_str+='X'
            }
        }
        // this section substituting X or A for found word
        // This operation occurs so that the search method does not return duplicate indexes
        str = str.replace(rXForRep, replace_str)
    }
    // this section convertes a text to a list of letters 
    let textBox = text.split('')
    // Looping based on the number of indexes list elements
    for (let i in indexes){
        // Checking whether this word is in index 0 of the text or not(So that the span tag is not created at index -1)
        if (indexes[i]==0){
            textBox[indexes[i]] = `<span style="background-color:yellow">${textBox[indexes[i]]}`
        }else{
            textBox[indexes[i]-1] += '<span style="background-color:yellow">'
        }
        // closing the tag
        textBox[indexes[i]+textInput.length-1] += '</span>'
        
        
    }
    // convert a list to a string
    document.getElementById('text-box').innerHTML = textBox.join('')

}

    

    

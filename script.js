let number = 0
// This is the variable that is used. By starting at 0 it can be influenced by the textbox and then changed through operations to get the intended result.
document.getElementById('button').addEventListener('click', area)
// This simply allows the button to work and kickstart the function.
function area () {
  number = document.getElementById('text').value
  // This function takes the imput from the textbox and sets it to the value of number.
  number = parseInt(number)
  // This turns the value of number which was considered a character by the code, and turns it into a number that can be used for mathmatical operations.
  number = number * number
  // This is the operation used to find the area for a square by multiply the number by itself.
  document.write(number)
  // This displays the answer of the operation on the screen as text.
}

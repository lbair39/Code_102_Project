// console.log('I am working')

alert('Answer the following questions.' )

let userName = prompt('What is your name?')
let question1 = prompt('What is your favorite color?')
let question2 = prompt('Do you like hiking? Please use "Yes" or "No"')
let question3 = prompt('Will you stay on the path created for you? Use "Yes" or "No".')
let question4 = prompt('You come across a bear, will you decided to challenge it, or run away? Please use "Challenge" or "Run".')
document.write('<h1>Hello ' + userName + ', welcome to our interactive story game!</h1>')

document.write('<h2>Your response to the questions was used to show how your hike will go.</h2>')
if(question2 === "No"){
    question2answer = ('<h3>Your parents forced you to go on a hike because you were being too lazy at home, you had chose to wear your favorite ' + question1 + ' jacket. </h3>')
}
if(question2 === "Yes"){
    document.write('<h3>You had decided to go on a hike because you needed to clear your mind, you had chose to wear your favorite ' + question1 + ' jacket. </h3>')
}

if(question3 === "No"){
    document.write('<h3></h3>')
}
if(question3 === "Yes"){
    document.write('<h3></h3>')
}
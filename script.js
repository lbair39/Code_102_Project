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
    question2answer = ('<h3>Your parents forced you to go on a hike because you were being too lazy at home.</h3>')
}
if(question2 === "Yes"){
    question2answer = ('<h3>You had decided to go on a hike because you needed to clear your mind.</h3>')
}
if(question3 === "Yes"){
    question3answer = ('<h3>You noticed there was an opening on the side of the path, you decided to stay on the path made for you. It started to rain and you relized the path was getting extremely hard to walk on. You looked around for shelter or a tree to sit under. You saw that there was a cave.</he>')
}
if(question3 === "No"){
    question3answer = ('<h3>You noticed there was an opening on the side of the path, you decided to see where it would lead you. While walking down this opening you came across a cave. You noticed it was starting to rain so you went into the cave for shelter</h>')
}
if(question4 === "Run"){
    question4answer = ('<h3>While inside of the cave, you heard something moving. You walked deeper into the cave to see what it was. Oh no, its a bear! You decided to try and run away from it. The bear chases you out of the cave but you end up slipping due to the wet ground. The bear mauled you and fed you to her cubs. </h3>')
}
if(question4 === "Challenge"){
    question4answer = ('<h3>While inside of the cave, you heard something moving. You walked deeper into the cave to see what it was. Oh no, its a bear! You decided to challenge the bear. While throwing around some karate moves, the bear felt very threatened. She and her cubs ran out of the cave.</h3>')
}

document.write('<p>You threw on your favorite ' + question1 + ' jacket. ' + question2answer + ' The hike was very calming. ' + question3answer + '.</p>')
// console.log('I am working')

alert('Answer the following questions.' )


let userName = prompt('What is your name?')

let petsName = prompt('Whats the name of your dog? If you dont have one, come up with a name.')

let question1 = prompt('What is your favorite color?')

let question2 = prompt('Do you like hiking? Please use "Yes" or "No"')

let question3 = prompt('Will you stay on the path created for you while hiking? Use "Yes" or "No".')

let question4 = prompt('You come across a bear, will you decided to challenge it, or run away? Please use "Challenge" or "Run".')


document.write('<h1 id="heading">Hello ' + userName + ', welcome to our interactive story game!</h1>')

document.write('<h1 id="heading">Your response to the questions was used to show how your hike will go.</h1>')
if(question2 === "No"){
    question2answer = ('Your parents forced you to go on a hike because you were being too lazy at home.')
}

if(question2 === "Yes"){
    question2answer = ('You had decided to go on a hike because you needed to clear your mind.')
}

if(question3 === "Yes"){
    question3answer = ('You noticed there was an opening on the side of the path, you decided to stay on the path made for you because it was safer. It started to rain and you realized the path was getting extremely hard to walk on. You looked around for shelter or a tree to sit under with your dog. You saw that there was a cave so you decided to go inside to escape the rain.')
}

if(question3 === "No"){
    question3answer = ('You noticed there was an opening on the side of the path, you wanted to see where it would lead you. While walking down this opening you jumped on a large rock, which caused it to start tumbling down the mountain. You started sliding down the moutain due to the mud. A tree stopped you and you watched the rock roll to the bottom. While trying to recover, you noticed a cave. It was raining, you and your dog were getting very muddy, so you went into the cave for shelter.')
}

if(question4 === "Run"){
    question4answer = ('You chose to try and run away from it. The bear chases you out of the cave but you end up slipping due to the wet ground, you looked around for ' + petsName + ', they were no where to be seen. You heard your dog whining, thinking they got attacked. The bear was now hovering over you getting ready to feed you to her cubs. In the corner of your eye you see ' + petsName + '. Your dog started communicating with the bear, making a peace offering. You and your dog left the cave and sat under a random tree. After it stopped raining, you guys tried to find your way home. You had no idea where you were. After hours of searching for a way out you saw a highway. You followed this highway and eventually made it home. You now have a fear of bears and caves.')
}

if(question4 === "Challenge"){
    question4answer = ('You chose to challenge the bear. While throwing around some karate moves and your dog barking, the bear felt very threatened. She and her cubs ran out of the cave into the rain. You were suprised you had survived. The bear ended up coming back after hiding her cubs. She started mauling you and your dog flees. ' + petsName + ' ditched you making it home safely without your presence.')
}

document.write('<p id="p1">You threw on your favorite ' + question1 + ' jacket and grabbed your dog ' + petsName + '.' +' ' + question2answer + ' The hike was very calming. ' + question3answer + ' It was very cold. While inside of the cave, you heard something moving. You walked deeper into the cave to see what it was. Oh no, its a bear! ' + question4answer + '</p>')
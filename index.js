    let userNumbers = []
    let randomNumber
    let attemptsNumber = 0
    let maxguesses = 10

        function newgame(){
            window.location.reload()
        }

        function loop(){
            randomNumber = Math.floor(Math.random() * 100)
            console.log(randomNumber)
        }

        function compareNumbers(){
            const userNumber = Number(document.getElementById('inputBox').value)
            userNumbers.push(' ' + userNumber)
            document.getElementById('guesses').innerHTML = userNumbers
            attemptsNumber++
            document.getElementById('attempts').innerHTML = attemptsNumber

        if(attemptsNumber <= maxguesses){   
            if(userNumber > randomNumber){
                document.getElementById('textOutput').innerHTML = 'Lower'
                document.getElementById('inputBox').value = ''
            }
            else if(userNumber < randomNumber){
                document.getElementById('textOutput').innerHTML = 'Higher'
                document.getElementById('inputBox').value = ''
            }
            else{
                document.getElementById('textOutput').innerHTML = 'Congratulations!'
                document.getElementById('inputBox').value = ''
                document.getElementById('inputBox').setAttribute('Readonly', String)
            }
        }
        else{
            document.getElementById('textOutput').innerHTML = 'You lose! Thanks for playing'
            document.getElementById('inputBox').setAttribute('Readonly', String)
        }

        }

let game = document.getElementById("game")
let latest = 0

let iconList = [
    1,1,
    2,2,
    3,3,
    4,4,
    5,5,
    6,6,
    7,7,
    8,8
]

iconList = iconList.sort(() => {
    let rnd = Math.random() - 0.5
    return rnd
})

for (let i = 0; i < 16; i++) {
    let card = document.createElement("div")
    card.classList.add("card")
    game.appendChild(card)
    card.onclick = () => {
    card.innerText = iconList[i]
    card.classList.add("selected")

    test()
    

   /* if (moves == 0){
        latest = card
        return
    }
    else if ((moves % 2) != 0){
        latest = card.innerText
    }
    else {
        alert(latest.innerText)
    }

    if (latest != card.innerText){
        let cards = document.getElementsByClassName("card")

        
    }*/
}
    
}

function restart() {
    let cards = document.getElementsByClassName("card")

    for (let i = 0; i < 16; i++) {
    cards[i].innerText = ""
    }
}

function newgame() {
    iconList = iconList.sort(() => {
        let rnd = Math.random() - 0.5
        return rnd
    })

    restart()
}

function test(){
    let selectedCards = document.getElementsByClassName("selected")
    if (selectedCards < 2) return

    let card1 = selectedCards[0]
    let card2 = selectedCards[1]
    
    
}
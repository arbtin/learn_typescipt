const parentFunction = (person) => {
    let coins = 3

    return () => {
        coins -= 1
        if (coins > 0) console.log(
            `${person} has ${coins} left`)
        else console.log(
            `${person} is out of coins`)
    }
}

const son = parentFunction('Son')

son()
son()
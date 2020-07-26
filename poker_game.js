/*
Partiendo de una baraja de 52 objetos, generamos 2 manos aleatorias
Las comparamos y establecemos la ganadora
El resultado, además de mostrarlo por consola, lo guardamos en un fichero.
Hacemos 2 versiones, con las operaciones de ficheros síncronas y asíncronas.
*/

const suits = ['S', 'H', 'C', 'D']
const values = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A']

class Card {
  constructor (suit, value) {
    this.suit = suit
    this.value = value
  }
}

class Deck {
  constructor () {
    this.cards = []
    
  }

  createDeck () {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        this.cards.push(new Card(suits[i], values[j]))
      }
    }
    return this.cards.length
  }

  deal () {
    // creamos las manos
    let hand1 = []
    let hand2 = []
    let hands = {
      player1: hand1,
      player2: hand2
    }
    // sacamos cinco cartas de la baraja
    hand1.push(...this.cards.splice(0, 4))
    return console.log('Jugador 1: ', hand1)
    // método .pop elimina el último elemento de un array y lo devuelve
  }

  /* shuffle () {
    let x = this.cards.length
    let i = this.cards[x]
    let j
    while (x) {
      j = Math.floor(Math.random() * x--)
      this.cards[x] = this.cards[j]
      this.cards[j] = i
    }
    return this.cards
  } */
}
let deck = new Deck()
deck.createDeck()
console.log(deck.deal())
// número de cartas 52
// console.log(deck.createDeck())

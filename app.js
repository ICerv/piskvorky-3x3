import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4' // Tento řádek vám umožňuje používat funkci findWinner od jiného programátora. Více se o zápisu s import dozvíte v pozdějších lekcích.

// Kód níže je pouze ukázka použití funkce findWinner. Následující řádky smažte.

// Ukázka použití pro rozehranou hru 3x3, kde začínající hráč kolečko hrál všechny své tři tady do prvního sloupečku a druhý hráč křížek všechny své dva tahy do druhého sloupečku.
// const ukazkoveHerniPole = ['o', 'x', '_', 'o', 'x', '_', 'o', '_', '_']
// Pro lepší představu stejné pole lze zapsat i takto:
/*
const ukazkoveHerniPole = [
	'o', 'x', '_',
	'o', 'x', '_',
	'o', '_', '_',
]
*/
// const vitez = findWinner(ukazkoveHerniPole)
// console.log(`Vyhrál hráč se symbolem ${vitez}.`) // 'Vyhrál hráč se symbolem o.'


const games = document.querySelectorAll('.hra');
games.forEach((game) => {
	const buttons = game.querySelectorAll('.policko');
	const boardFields = Array.from(buttons).map((button) => {
		if (button.classList.contains('kolecko')) {
			return 'o'
		}
		if (button.classList.contains('krizek')) {
			return 'x'
		}
		return '_'
	})
	const winner = findWinner(boardFields)
	const result = game.querySelector('.vysledek');
	if (winner === 'o') {
		result.textContent = 'Vyhralo kolecko!'
	} else if (winner === 'x') {
		result.textContent = 'Vyhral krizek!'
	} else if (winner === null) {
		result.textContent = 'Remiza!'
	}
})


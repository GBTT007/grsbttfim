const url = "https://loja.emporiodocelular.com.br/"
const pec = document.querySelector('#pec')

const url1 = "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTIxMzE3MTE3NjgzNzcx?story_media_id=2542284337708507002_31226003325&igshid=YmMyMTA2M2Y="
const man = document.querySelector('#man')

const url2 = "https://www.youtube.com/watch?v=HS5zTtSwYIA"
const maq = document.querySelector('#maq')

const url3 = "https://www.linkedin.com/in/gabriel-ribeiro-dos-santos-a95521247/recent-activity/shares/"
const edin = document.querySelector('#edin')

const url4 = "https://wa.me/qr/JIW6FIPLS66DK1"
const zap = document.querySelector('#zap')

function openInNewTab(url){const win = window.open(url, '_blank')}



pec.addEventListener('click', () => {openInNewTab(url)})
man.addEventListener('click', () => {openInNewTab(url1)})
maq.addEventListener('click', () => {openInNewTab(url2)})
edin.addEventListener('click', () => {openInNewTab(url3)})
zap.addEventListener('click', () => {openInNewTab(url4)})
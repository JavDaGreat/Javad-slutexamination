const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const data=''
const solen=document.querySelector('.Solen');
const jorden=document.querySelector('.Jorden')
const venus=document.querySelector('.Venus')
const merkurius=document.querySelector('.Merkurius')
const mars=document.querySelector('.Mars')
const jupiter=document.querySelector('.Jupiter')
const saturnus=document.querySelector('.Saturnus')
const uranus=document.querySelector('.Uranus')
const neptunus=document.querySelector('.Neptunus')
const article=document.querySelector('article')
let dataPlanet;
let solInfo;
let jordenInfo;
let venusInfo;
let merkuriusInfo;
let marsInfo;
let jupiterInfo;
let saturnusInfo;
let uranusInfo;
let neptunusInfo;



async function getPlanets() {
     const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
     const data = await response.json();
     const rep = await fetch(`${BASE_URL}/bodies`, {
        headers: {
            'x-zocom': data.key
        }
    });
      dataPlanet= await rep.json();
    }


    async function plantInfo ()
{
      await getPlanets();
      console.log(dataPlanet)

      solInfo=dataPlanet.bodies[0]
      jordenInfo=dataPlanet.bodies[1]
      venusInfo=dataPlanet.bodies[2]
      merkuriusInfo=dataPlanet.bodies[3]
      marsInfo=dataPlanet.bodies[4]
      jupiterInfo=dataPlanet.bodies[5]
      saturnusInfo=dataPlanet.bodies[6]
      uranusInfo=dataPlanet.bodies[7]
      neptunusInfo=dataPlanet.bodies[8]


    }

 plantInfo();
 

 solen.addEventListener('click',()=>{
  console.log(`description: ${solInfo.desc} namn: ${solInfo.name}`)
 })
 jorden.addEventListener('click',()=>{
  console.log(`description: ${jordenInfo.desc} namn: ${solInfo.name}`)
 })
 venus.addEventListener('click',()=>{
  console.log(`description: ${venusInfo.desc} namn: ${solInfo.name}`)
 })
 merkurius.addEventListener('click',()=>{
  console.log(`description: ${merkuriusInfo.desc} namn: ${solInfo.name}`)
 })
 mars.addEventListener('click',()=>{
  console.log(`description: ${marsInfo.desc} namn: ${solInfo.name}`)
 })
 jupiter.addEventListener('click',()=>{
  console.log(`description: ${jupiterInfo.desc} namn: ${solInfo.name}`)
 })
 saturnus.addEventListener('click',()=>{
  console.log(`description: ${saturnusInfo.desc} namn: ${solInfo.name}`)
 })
 uranus.addEventListener('click',()=>{
  console.log(`description: ${uranusInfo.desc} namn: ${solInfo.name}`)
 })
 neptunus.addEventListener('click',()=>{
  article.classList.toggle('hide')
  console.log("ayri")
 })






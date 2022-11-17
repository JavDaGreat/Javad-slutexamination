const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';
const solen=document.querySelector('.solen');
const merkurius=document.querySelector('.merkurius')
const venus=document.querySelector('.venus')
const jorden=document.querySelector('.jorden')
const mars=document.querySelector('.mars')
const jupiter=document.querySelector('.jupiter')
const saturnus=document.querySelector('.saturnus')
const uranus=document.querySelector('.uranus')
const neptunus=document.querySelector('.neptunus')
const article=document.querySelector('article')
const section=document.querySelector('section')
const btn=document.querySelector('button')
const p=document.querySelector('p')
const h1=document.querySelector('.name')
const latin=document.querySelector('.latin')
const perimeter=document.querySelector('.omkrets')
const distance=document.querySelector('.avstånd')
const maxTemp=document.querySelector('.max-temp')
const minTemp=document.querySelector('.min-temp')
const moons=document.querySelector('.måner')

let dataPlanet;
let solInfo;
let merkuriusInfo;
let venusInfo;
let jordenInfo;
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


    
    console.log(dataPlanet)
    
async function planetInfo (){
    await getPlanets();
    console.log(dataPlanet)

    solInfo=dataPlanet.bodies[0]
    merkuriusInfo=dataPlanet.bodies[1]
    venusInfo=dataPlanet.bodies[2]
    jordenInfo=dataPlanet.bodies[3]
    marsInfo=dataPlanet.bodies[4]
    jupiterInfo=dataPlanet.bodies[5]
    saturnusInfo=dataPlanet.bodies[6]
    uranusInfo=dataPlanet.bodies[7]
    neptunusInfo=dataPlanet.bodies[8]
    }

    function showDatail(planetName,latinName,description,
      circumference,Distance,MinTemp,MaxTemp,moonsName){

      article.classList.toggle('hide')
      section.classList.toggle('hide')
      
      h1.innerText=planetName
      latin.innerText=latinName
      p.innerText=description
      perimeter.innerText=`${circumference} Km`
      distance.innerText=`${Distance} Km`
      minTemp.innerText=`${MinTemp} C`
      maxTemp.innerText= `${MaxTemp} C`
      moons.innerText=moonsName.join(', ')
   
     }

    
 planetInfo();

 solen.addEventListener('click',()=>{
  
  showDatail(solInfo.name,solInfo.latinName,solInfo.desc,solInfo.circumference,
    solInfo.distance,solInfo.temp.day,solInfo.temp.night,solInfo.moons)
 

 })
 merkurius.addEventListener('click',()=>{
 
  showDatail(merkuriusInfo.name,merkuriusInfo.latinName,merkuriusInfo.desc,merkuriusInfo.circumference,merkuriusInfo.distance,
    merkuriusInfo.temp.day,merkuriusInfo.temp.night,merkuriusInfo.moons)

  

 })
 venus.addEventListener('click',()=>{
 
  showDatail(venusInfo.name,venusInfo.latinName,venusInfo.desc,venusInfo.circumference,venusInfo.distance,
    venusInfo.temp.day,venusInfo.temp.night,venusInfo.moons)
  
 })
 jorden.addEventListener('click',()=>{
  
  showDatail(jordenInfo.name,jordenInfo.latinName,jordenInfo.desc,jordenInfo.circumference,jordenInfo.distance,
    jordenInfo.temp.day,jordenInfo.temp.night,jordenInfo.moons)
  

 })

 mars.addEventListener('click',()=>{

  showDatail(marsInfo.name,marsInfo.latinName,marsInfo.desc,marsInfo.circumference,marsInfo.distance,
    marsInfo.temp.day,marsInfo.temp.night,marsInfo.moons)

 })
 jupiter.addEventListener('click',()=>{
  
  showDatail(jupiterInfo.name,jupiterInfo.latinName,jupiterInfo.desc,jupiterInfo.circumference,jupiterInfo.distance,
    jupiterInfo.temp.day,jupiterInfo.temp.night,jupiterInfo.moons)
 


 })
 saturnus.addEventListener('click',()=>{

  showDatail(saturnusInfo.name,saturnusInfo.latinName,saturnusInfo.desc,saturnusInfo.circumference,saturnusInfo.distance,
    saturnusInfo.temp.day,saturnusInfo.temp.night,saturnusInfo.moons)

 })
 uranus.addEventListener('click',()=>{

  showDatail(uranusInfo.name,uranusInfo.latinName,uranusInfo.desc,uranusInfo.circumference,uranusInfo.distance,
    uranusInfo.temp.day,uranusInfo.temp.night,uranusInfo.moons)


 })
 neptunus.addEventListener('click',()=>{

  showDatail(neptunusInfo.name,neptunusInfo.latinName,neptunusInfo.desc,neptunusInfo.circumference,neptunusInfo.distance,
    neptunusInfo.temp.day,neptunusInfo.temp.night,neptunusInfo.moons)
  

 })

 btn.addEventListener('click',()=>{
  article.classList.toggle('hide')
  section.classList.toggle('hide')
 })






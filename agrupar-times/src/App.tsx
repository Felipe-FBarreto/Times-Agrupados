import React, { ReactElement } from 'react'
import styled from './Styles.module.css'
const clubes = [
  {
    estados:'São Paulo',
    times:['Santos','Palmeiras','Corintians','São Paulo']
  },
  {
    estados:'Rio de Janeiro',
    times:['Fluminense','Flamengo','Bangu','Amadureira']
  },
  {
    estados:'Minas Gerais',
    times:['Átletico Mineiro','Cruzeiro','Àmerica','Tombense']
  },
]
function App() {
  const [estados, setEstados] = React.useState([] as ReactElement[]);

  function handleClick(){
    setEstados(clubes.map((e, index) => (

        <div className={styled.container} key={index}>
          <h1>{e.estados}</h1>
          <ul>
            {e.times.map((times, index) => <li style={{listStyle:'none'}} key={index}>{times}</li>)}
          </ul>
        </div>

      
    )));
  }

  function handleDesagrup(){
    setEstados([])
  }
  return (
    <div>
      <div  style={{display:'flex'}}>
        <div>
          {clubes.map((item)=> item.times.map((item,index) => <li style={{margin:'1rem' ,listStyle:'none'}} key={index}>{item}</li>))}
        </div>
          <div>{estados}</div>
      </div>
        <button onClick={handleClick} style={{marginLeft:'1rem',padding:'0.5rem 1rem'}}>Agrupar</button>
        <button onClick={handleDesagrup} style={{marginLeft:'1rem',padding:'0.5rem 1rem'}}>Desagrupar</button>
      
    </div>
  );
}
export default App;
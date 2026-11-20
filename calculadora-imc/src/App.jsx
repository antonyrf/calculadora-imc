import './App.css'
import styles from './App.module.css'
import { useState } from 'react'

function App () {
  const [nome, setNome] = useState ('')
  const [altura, setAltura] = useState ('')
  const [peso, setPeso] = useState ('')

  const alturaNum = Number(altura)
  const pesoNum = Number(peso)

  const imc = alturaNum > 0 && pesoNum > 0
    ? pesoNum / (alturaNum * alturaNum)
    : null

  return (
    <header className={styles.header}>
      <div className={styles.calculadoraContainer}>
        <h1>
          Calculadora IMC corporal
          <hr />
        </h1>
        
        <h2>
          Para prosseguir, insira seu nome,<br></br> peso e altura.
        </h2>
        
        <input type="text" placeholder='digite seu nome' value={nome} onChange={e => setNome(e.target.value)} />
        <input type="number" placeholder='altura em M (ex: 1.75)' step='0.01' value={altura} onChange={e => setAltura(e.target.value)}/>
        <input type="number" placeholder='peso em kgs' value={peso} onChange={e => setPeso(e.target.value)} />

        <div className={styles.resultado}>
          {nome} seu IMC é: {imc !== null ? `${imc.toFixed(1)}` : 'Preencha altura e peso'}
        </div>
      </div>
    </header>
  )
}

export default App

import { useState } from "react"
import Error from "./Error"

const NewExpense = ({budget, setBudget, setIsValid}) => {

  const [error, setError] = useState('')

  const handleBudget = (e) => {
    e.preventDefault()
    if(!budget || budget < 0) {
      setError('Is not a valid budget')
      return
    }
    setError('')
    setIsValid(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleBudget} className='formulario'>
            <div className='campo'>
                <label>Define budget</label>
                <input
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder='Add your budget'
                    value={budget}
                    onChange={ e => setBudget(Number(e.target.value))}
                />
            </div>
            <input type='submit' value='add'/>
            {error && <Error type="error">{error}</Error>}
        </form>
    </div>
  )
}

export default NewExpense
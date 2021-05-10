import { useContext } from 'react'
import { CoronaContext } from '../../../../App'

const CountryPicker = () => {
    const {state, dispatch} = useContext(CoronaContext)
    const {countriesName, currentCountryName} = state
    // console.log(countriesName)

    const handleCountrySelector = (e) => {
        const countrySelected = e.target.value 
        console.log(countrySelected)
        dispatch({ type: 'CHANGE_COUNTRY_NAME', payload: countrySelected})
    }

    return(
        <form action="" className='country-picker text-center'>
            <select name="" id="" className='country-picker__select' onChange={handleCountrySelector}>
                <option value="" className='country-picker__option'>Global</option>
                {countriesName.map(name => <option key={name} value={name} className='country-picker__option'>{name}</option>)}
            </select>
        </form>
    )
}

export default CountryPicker
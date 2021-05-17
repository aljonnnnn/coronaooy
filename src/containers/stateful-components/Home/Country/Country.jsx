import { useContext, useMemo } from 'react';
import { CoronaContext } from '../../../../contexts/CoronaProvider';
import globalICon from '../../../../assets/img/global.svg'

const Country = () => {
    const {state} = useContext(CoronaContext)
    const { currentCountryName, country } = state

    return useMemo(() => {
        return (
            <div className="country">
                <span className='country__name'>{currentCountryName ? currentCountryName : 'Global'}</span>
                <img className='country__flag' src={country ? country.flag : globalICon} alt=""/>
            </div>
        )
    }, [currentCountryName, country])
}

export default Country;
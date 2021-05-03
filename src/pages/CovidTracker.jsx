import { useState } from 'react'
import Cards from "../containers/stateful-components/Home/Card/Cards"
import BarChart from "../containers/stateful-components/Home/ChartJS/BarChart"
import Country from "../containers/stateful-components/Home/Country/Country"
import CountryPicker from "../containers/stateful-components/Home/Country-picker/CountryPicker"
import useFetch from "../utils/useFetch"
import Loading from '../containers/stateless-components/Loading/Loading'
import LineChart from '../containers/stateful-components/Home/ChartJS/LineChart'

const CovidTracker = () => {
    const [country, setCountry] = useState();
    const { data: global } = useFetch('https://disease.sh/v3/covid-19/all');
    const { data: allCountry } = useFetch('https://disease.sh/v3/covid-19/countries');
    const { data: selectedCountry, pending: pendingSelectedCountry } = useFetch('https://disease.sh/v3/covid-19/countries/', country);
    const { data: globalPast90, pending: pendingGlobalPast90 } = useFetch('https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=90');
    const { data: countryPast90, pending: pendingCountryPast90 } = useFetch('https://corona.lmao.ninja/v3/covid-19/historical/Canada?lastdays=90');

    // {global && console.log(global)}
    // {allCountry && console.log(allCountry)}
    // {selectedCountry && console.log(selectedCountry)}
    // console.log(country)

    const handleSelectCountry = (e) => {
        setCountry(e.target.value)
    }

    return(
        <main className='main'>
            {global && selectedCountry && <Country globalData={global} selectedCountry={selectedCountry} countryName={country} />}
            {global && selectedCountry && <Cards globalData={global} selectedCountry={selectedCountry} countryName={country} />}
            {allCountry && <CountryPicker onChanged={handleSelectCountry} countryData={allCountry}/>}

            {pendingSelectedCountry && <Loading />}
            {global && selectedCountry && globalPast90 && <BarChart globalData={global} selectedCountry={selectedCountry} countryName={country} globalPast90={globalPast90}/> }
            {pendingSelectedCountry && <Loading />}
            {globalPast90 && <LineChart globalPast90={globalPast90} countryPast90={countryPast90} country={country} />}
        </main>
    )
}

export default CovidTracker
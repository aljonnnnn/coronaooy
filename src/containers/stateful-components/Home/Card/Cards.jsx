import { useContext } from 'react'
import CountUp from 'react-countup'
import { CoronaContext } from '../../../../App'
import Loading from '../../../stateless-components/Loading/Loading'
const Cards = () => {
    const { state, dispatch } = useContext(CoronaContext)
    const { currentCountryName, global, country, loading } = state
    // console.log(loading)
    
    const data = currentCountryName ? country : global

    const date = new Date().toLocaleDateString()

    return(
        <div className='card'>
            {/* {loading && <Loading />} */}
           {data && 
             <div className="container">
                <div className="card__flex">
                    <div className="card__box">
                        <div className="card__item yellow">
                            <div className="card__category">Active</div>
                            <h3 className="card__number"><CountUp start={0} end={data.active ? data.active : 0} duration={1} separator=","/></h3>
                            <p className="card__today">Critical: <CountUp start={0} end={data.critical ? data.critical : 0} duration={1} separator=","/></p>
                            <p className="card__today">Tests: <CountUp start={0} end={data.tests ? data.active : 0} duration={1} separator=","/></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item green">
                            <div className="card__category">Recovered</div>
                            <h3 className="card__number"><CountUp start={0} end={data.recovered ? data.recovered : 0} duration={1} separator=","/></h3>
                            <p className="card__today">Today: +<CountUp start={0} end={data.todayRecovered ? data.todayRecovered : 0} duration={1} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item black">
                            <div className="card__category">Deaths</div>
                            <h3 className="card__number"><CountUp start={0} end={data.deaths ? data.deaths : 0} duration={1} separator=","/></h3>
                            <p className="card__today">Today: +<CountUp start={0} end={data.todayDeaths ? data.todayDeaths : 0} duration={1} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                    <div className="card__box">
                        <div className="card__item red">
                            <div className="card__category">Cases</div>
                            <h3 className="card__number"><CountUp start={0} end={data.cases ? data.cases : 0} duration={1} separator=","/></h3>
                            <p className="card__today">Today: +<CountUp start={0} end={data.todayCases ? data.todayCases : 0} duration={1} separator=","/></p>
                            <p className="card__date"><span>{date}</span></p>
                        </div>
                    </div>
                </div>
            </div>
           }
        </div>
    )
}

export default Cards
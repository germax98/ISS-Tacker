import { useContext } from "react"
import { CurrentCountryContext } from "../../contexts/country.context"

export const Country= ()=>{
    const { currentCountry } = useContext(CurrentCountryContext)
    
    return(
        <div>
            {currentCountry && (
                <p>
                  Country: {currentCountry}
                </p>
             )}
            <h1>test </h1>
        </div>
    )
}
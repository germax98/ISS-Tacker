import { 
    createContext, 
    useState, 
    useEffect,
    useContext } from "react"
import { IssPositionContext } from "./issposition.context"



export const CurrentCountryContext = createContext({})

export const CurrentCountryProvider = ({ children }) => {
    const issPosition = useContext(IssPositionContext);
    
    
    
    const [currentCountry, setCurrentCountry] = useState(null);
    
    useEffect(() => {
        if (issPosition.issPosition.name) {
            const url = `https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=${issPosition.issPosition.latitude}&lon=${issPosition.issPosition.longitude}`;
            
            const options = {
                headers: {
                  'accept-language': 'en'
                }
              };
            const fetchData = async () => {
                try {
                    const response = await fetch(url,options);
                    if (response.ok) {
                        const data = await response.json();
                        
                        const country = data.features[0].properties.geocoding.country
                        setCurrentCountry(country);
                        
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            
            fetchData();
        }
    }, [issPosition]);
    
    const contextValue = { currentCountry };
    
    return (
      <CurrentCountryContext.Provider value={contextValue}>
        {children}
      </CurrentCountryContext.Provider>
    );
};

  
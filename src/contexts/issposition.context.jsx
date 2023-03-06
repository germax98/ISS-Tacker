import { createContext, useState, useEffect } from "react"

export const IssPositionContext = createContext({})

export const IssPositionProvider = ({ children }) => {
  const url = "https://api.wheretheiss.at/v1/satellites/25544"
  const [issPosition, setIssPosition] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (response.ok) {
          const data = await response.json()
          setIssPosition(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    const interval = setInterval(fetchData, 30000)

    return () => clearInterval(interval)
  }, [])


  const value = { issPosition }

  return (
    <IssPositionContext.Provider value={value}>
      {children}
    </IssPositionContext.Provider>
  )
}

//Problem: marker on the map is not updating 


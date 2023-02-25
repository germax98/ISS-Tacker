import { useState, useEffect } from "react"

const url = 'https://api.wheretheiss.at/v1/satellites/25544';

const MapTest = () => {
  const [issPosition, setIssPosition] = useState(null)

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

  return (
    <div>
      <h1>Map</h1>
      {issPosition && (
        <p>
          Latitude: {issPosition.latitude}, Longitude: {issPosition.longitude}
        </p>
      )}
    </div>
  )
}

export default MapTest
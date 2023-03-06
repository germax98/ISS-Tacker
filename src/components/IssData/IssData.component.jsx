import { useContext } from "react"
import { IssPositionContext } from "../../contexts/issposition.context"

const IssData = () => {
  const { issPosition } = useContext(IssPositionContext)
 


  return (
    <div>
      <h1>Hello</h1>
      {issPosition && (
        <p>
          Latitude: {issPosition.latitude}, Longitude: {issPosition.longitude}
        </p>
      )}
    </div>
  )
}

export default IssData

// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="app-container">
      <div>
        <img src={imgUrl} className="app-img" alt={name} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem

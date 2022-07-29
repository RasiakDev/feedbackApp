import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card className="card" >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className="edit" >
          <FaEdit color="purple"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.proptTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

// Write your code here
import {EachList, EachListHead, EachListPara} from './styledComponents'

const NoteItem = props => {
  const {eachDetails} = props
  const {title, note} = eachDetails

  return (
    <EachList>
      <EachListHead>{title}</EachListHead>
      <EachListPara>{note}</EachListPara>
    </EachList>
  )
}

export default NoteItem

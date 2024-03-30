// Write your code here
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainCont,
  MainHead,
  SubCont,
  Input,
  Button,
  UnList,
  NoCont,
  Image,
  NoHead,
  NoPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [list, setList] = useState([])

  const onClickAdd = () => {
    const newList = {
      id: uuid(),
      title,
      note,
    }

    setList(prevState => [...prevState, newList])
    setTitle('')
    setNote('')
  }

  const renderNoList = () => (
    <NoCont>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoHead>No Notes Yet</NoHead>
      <NoPara>Notes you add will appear here</NoPara>
    </NoCont>
  )

  const renderList = () => (
    <UnList>
      {list.map(each => (
        <NoteItem key={each.id} eachDetails={each} />
      ))}
    </UnList>
  )

  return (
    <MainCont>
      <MainHead>Notes</MainHead>
      <SubCont>
        <Input type="text" value={title} placeholder="Title" />
        <Input type="text-area" value={note} placeholder="Take a Note..." />
        <Button onClick={onClickAdd} type="button">
          Add
        </Button>
      </SubCont>
      {list.length > 0 ? renderList() : renderNoList()}
    </MainCont>
  )
}

export default Notes

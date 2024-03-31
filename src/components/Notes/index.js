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
  TextArea,
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

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
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
      <SubCont onSubmit={onClickAdd}>
        <Input
          type="text"
          value={title}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <TextArea
          type="text-area"
          cols={50}
          rows={4}
          value={note}
          placeholder="Take a Note..."
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </SubCont>
      {list.length > 0 ? renderList() : renderNoList()}
    </MainCont>
  )
}

export default Notes

// Style your elements here

import styled from 'styled-components'

export const MainCont = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  width: 100vw;
`

export const MainHead = styled.h1`
  font-size: 30px;
  color: blue;
  font-family: 'Bree Serif';
`
export const SubCont = styled.div`
  box-shadow: 1px 1px 3px 1px lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
`

export const Input = styled.input`
  border: none;
  outline: none;
  margin-bottom: 10px;
  width: 100%;
`
export const TextArea = styled.textarea`
  border: none;
  outline: none;
  margin-bottom: 10px;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: blue;
  outline: none;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 10px;
  width: 70px;
  align-self: flex-end;
  margin-top: 20px;
`

export const UnList = styled.ul`
  display: flex;
  justify-content: ;
  flex-wrap: wrap;
  list-style-type: none;
  width: 100%;
`

export const NoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100px;
  height: auto;
`

export const NoHead = styled.h1`
  color: black;
  font-size: 20px;
`

export const NoPara = styled.p`
  color: lightgrey;
  font-size: 10px;
`

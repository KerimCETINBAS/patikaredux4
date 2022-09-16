import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setMd } from '../redux/markdown'
export default function editor() {
  const dispatch = useDispatch()
  const markDown = useSelector( state => state.markDown.value)
  return (
    <textarea value={markDown} onChange={e => dispatch(setMd(e.target.value))} id="editor" cols="30" rows="10"></textarea>
  )
}

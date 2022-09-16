import React from 'react'
import { marked } from "marked"
import { useSelector  } from 'react-redux'
export default function viewer() {
    const markDown = useSelector( state => state.markDown.value)
  return (
    <div id='viewer' dangerouslySetInnerHTML={{__html:marked.parse(markDown)}} />
  )
}

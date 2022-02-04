import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

function ConvertCase(): JSX.Element {
  const [textArea, setTextArea] = useState('')
  const [character, setCharacter] = useState(0)

  const onTextAreaChange = e => {
    setTextArea(e.target.value)
    setCharacter(e.target.value.length)
  }

  function onUpperCase() {
    setTextArea(textArea.toUpperCase())
  }

  function onLowerCase() {
    setTextArea(textArea.toLowerCase())
  }

  function onCapitalizeFirstLetter() {
    const text = textArea.toLowerCase()
    setTextArea(text.charAt(0).toUpperCase() + text.slice(1))
  }

  function onCapitalizeLetter() {
    setTextArea(
      textArea.replace(/(?:^|\s)\S/g, a => {
        return a.toUpperCase()
      }),
    )
  }

  function onSnakeCase() {
    setTextArea(
      textArea
        .replace(/\W+/g, ' ')
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_'),
    )
  }

  function onCamelCase() {
    setTextArea(textArea.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()))
  }

  function onClear() {
    setTextArea('')
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mt-3 mb-2">
            Simply enter your text and choose the case you want to convert it to.
          </Form.Label>
          <Form.Control as="textarea" rows={8} onChange={onTextAreaChange} value={textArea} />
        </Form.Group>
        <p className="mb-3">Character count: {character}</p>
        <div className="d-flex flex-wrap button-wrapper">
          <Button variant="outline-primary" onClick={onUpperCase}>
            UPPER CASE
          </Button>
          <Button variant="outline-primary" onClick={onLowerCase}>
            lower case
          </Button>
          <Button variant="outline-primary" onClick={onCapitalizeFirstLetter}>
            Sentence case
          </Button>
          <Button variant="outline-primary" onClick={onCapitalizeLetter}>
            Capitalized Case
          </Button>
          <Button variant="outline-primary" onClick={onSnakeCase}>
            Snake case
          </Button>
          <Button variant="outline-primary" onClick={onCamelCase}>
            Camel case
          </Button>
          <Button variant="outline-primary" onClick={onClear}>
            Clear
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ConvertCase

import { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Form, Button } from 'react-bootstrap'

function ConvertBigNumber(): JSX.Element {
  const [input, setInput] = useState('')

  const onTextAreaChange = e => {
    setInput(e.target.value)
  }

  function onToWei() {
    const text = new BigNumber(input).dividedBy(1e18).toString()
    setInput(text)
  }

  function onFromWei() {
    const text = new BigNumber(input).multipliedBy(1e18).toString()
    setInput(text)
  }

  function onClear() {
    setInput('')
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mt-3 mb-2">
            Simply enter your text and choose the case you want to convert it to.
          </Form.Label>
          <Form.Control as="input" onChange={onTextAreaChange} value={input} />
        </Form.Group>
        <div className="d-flex flex-wrap button-wrapper">
          <Button variant="outline-primary" onClick={onToWei}>
            To Wei
          </Button>
          <Button variant="outline-primary" onClick={onFromWei}>
            From Wei
          </Button>
          <Button variant="outline-primary" onClick={onClear}>
            Clear
          </Button>
        </div>
      </Form>
    </>
  )
}

export default ConvertBigNumber

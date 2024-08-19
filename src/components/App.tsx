import { Button, Container } from 'react-bootstrap'
import { useDialog } from '../hooks/useDialog'
import { useState } from 'react'
import DialogContainer from './DialogContainer'
import ModalFirst from './modals/ModalFirst'
import ModalSecond from './modals/ModalSecond'
import ModalThird from './modals/ModalThird'


const App = () => {

  const dialog = useDialog()
  const [result, setResult] = useState('')

  const onButtonClick = async () => {

    setResult('')

    let result = 'Всё плохо.'

    if (
      await dialog.show(<ModalFirst close={dialog.close} />) && 
      await dialog.show(<ModalSecond {...dialog} />) && 
      await dialog.show(<ModalThird {...dialog} />)
    )
      result = 'Отлично!'

    setResult(result)
  }

  return (
    <Container>
      <h1>Demo Modal dialog</h1>
      <p>This is a demo of a modal dialog</p>
      <p>Click the button to open the modal</p>
      <Button variant="primary" onClick={onButtonClick}>Open Modal</Button>

      <p className='mt-3'>{result}</p>

      <DialogContainer opened={dialog.opened} component={dialog.component} />
    </Container>
  )
}

export default App

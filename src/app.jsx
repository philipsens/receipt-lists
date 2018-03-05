import React from 'react'
import { render } from 'react-dom'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const App = () => <div>
  Hello!
  <Button>Ree</Button>
</div>

render(<App />, document.querySelector('#target'))
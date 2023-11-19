import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: var(--color-brand-500)
`

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 15px;
`

function App() {
  return (
    <>
    <GlobalStyles />
    <div>
      <H1>Hello World</H1>
      <Input placeholder='Helloooo' />
    </div>
    </>
  )
}

export default App
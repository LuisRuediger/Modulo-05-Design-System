import { colors } from '@ignite-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  height: '$10',
})

export function App() {
  return <h1 style={{ color: colors.ignite300 }}>Hello World</h1>
}

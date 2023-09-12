import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

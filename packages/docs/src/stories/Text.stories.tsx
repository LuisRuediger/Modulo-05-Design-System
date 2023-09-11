import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, placeat! Corporis dignissimos ab magnam nihil placeat consequatur aliquid nesciunt at dolores. Distinctio, autem? Quibusdam impedit nemo, molestiae veritatis sequi ',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

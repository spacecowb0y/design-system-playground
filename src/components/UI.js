import {
  bool,
  string,
  number,
  oneOf,
  oneOfType,
} from 'prop-types'
import {
  idx,
  px,
  color,
  darken,
  caps,
  align,
} from './util'
import { Flex, Box } from 'rebass'
import SelectBase from 'rebass'
import { createLibrary } from 'rebass'

const numberOrString = oneOfType([ number, string ])
const bold = props => idx('weights.1', props.theme)

const components = [
  // Buttons
  {
    name: 'Button',
    type: 'button',
    props: {
      f: 1,
      m: 0,
      pl: 3,
      pr: 3,
      pt: 2,
      pb: 2,
      color: 'white',
    },
    style: props => ({
      fontFamily: 'inherit',
      fontWeight: bold(props),
      lineHeight: 16 / 14,
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      textDecoration: 'none',
      borderRadius: px(props.theme.radius),
      border: 0,
      appearance: 'none',
      backgroundColor: color(props)(props.bg),
      '&:hover': {
        boxShadow: `inset 0 0 0 999px ${darken(1/8)}`
      },
      '&:focus': {
        outline: 0,
        boxShadow: `0 0 0 2px ${color(props)(props.bg)}`
      },
      '&:active': {
        backgroundColor: color(props)(props.bg, 6),
        boxShadow: `inset 0 0 8px ${darken(1/4)}`
      },
      '&:disabled': {
        opacity: 1/4
      },
    })
  },
  {
    name: 'Text',
    type: 'p',
    props: {
      m: 0
    },
    style: props => Object.assign(
      {
        fontWeight: props.bold
          ? bold(props)
          : idx('weights.0', props.theme)
      },
      align(props),
      caps(props)
    ),
    propTypes: {
      left: bool,
      center: bool,
      right: bool,
      justify: bool,
      bold: bool,
      caps: bool
    }
  },
  {
    name: 'Heading',
    type: 'Text',
    props: {
      is: 'h2',
      f: 5,
      m: 0,
      bold: true
    },
    style: {
      lineHeight: 1.25
    },
    propTypes: {
      left: bool,
      center: bool,
      right: bool,
      justify: bool,
      bold: bool,
      caps: bool
    }
  },
]

const library = createLibrary(components)

export const {
  Button,
  Text,
  Heading,
} = library


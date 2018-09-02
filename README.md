
# @rebass/components

Create consistent styled-system based React UI components
(formerly system-components)

Built with [styled-system][sys],
with support for [styled-components][sc] & [emotion][emotion]

[![Build Status][build-badge]][build]

[build-badge]: https://img.shields.io/travis/rebassjs/components/master.svg?style=flat-square
[build]: https://travis-ci.org/rebassjs/components

```js
import system from '@rebass/components'

// creates a Box with default props tied to your theme
const Box = system({
  p: 2,
  bg: 'blue'
}, 'space', 'color')
```

Or, to use with [emotion][emotion]:

```js
import system from '@rebass/components/emotion'
```

## Usage

To create a styled-component with default props that hook into [styled-system][sys] props, pass a plain object as the first argument to the `system` function and pass the names of the styled-system functions as arguments after.

```js
const Card = system({
  px: 2,
  py: 3,
  border: '1px solid',
  borderColor: 'lightGray',
  borderRadius: 2
}, 'space', 'borders', 'borderColor', 'borderRadius')
```

@rebass/components automatically adds prop type definitions and removes style props from the underlying HTML element.

See the [styled-system docs][sys] for a complete list of the available style functions.

### Add style props without defaultProps

@rebass/components can also be created with [styled-system][sys] props without defining `defaultProps`.

```js
const Box = system(
  'space',
  'width',
  'color'
)
```

This allows for style props to be passed to the component instance:

```jsx
<Box
  width={1/2}
  px={3}
  py={4}
  bg='blue'
/>
```

### Using custom functions

Custom style functions can be passed as an argument.

```js
const Box = system(
  props => ({
    height: props.height
  })
)
```

### Changing the underlying HTML element

@rebass/components default to using a `<div>` as the HTML element.
To change the HTML element use the `is` prop.

```js
const Heading = system({
  is: 'h2',
  m: 0,
  fontSize: 6
})
```

Since `is` is a prop, it can also be passed to the element when used.
This is useful for one-off changes to ensure semantic markup.

```js
<Heading is='h1'>
  Hello
</Heading>
```

### Extending components

To extend another component, use the `extend` prop in your component definition.

```js
const Text = system({
  fontSize: 2,
}, 'fontSize')

const Bold = system({
  extend: Text,
  fontWeight: 'bold'
}, 'fontWeight')
```

### CSS prop

To add one-off custom CSS to any @rebass/component, use the `css` prop.

```js
<Heading css='opacity:0.75;'>
  Hello
</Heading>
```

The `css` prop can also accept object literal syntax.

```jsx
<Heading
  css={{
    opacity: 3/4
  }}>
  Hello
</Heading>
```

---

[MIT License](License.md)

[sys]: https://github.com/jxnblk/styled-system
[sc]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion

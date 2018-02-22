#vue-scrollbox
A Vue.js (v2.x+) component to provide scroll and observe resize.

# Installation
## NPM

 `$ npm install vue-scrollbox  --save`

import the script:

   import VueScrollbox from 'vue-scrollbox';

## Script tag
Grab the minified version under `dist/vue-scrollbox.min.js`
It will export a global `VueScrollbox` variable.

# Usage
## Register the component globally or locally:
```js
Vue.component('vue-scrollbox', VueScrollbox);
```
OR
```js
...
components: {
  VueScrollbox
}
...
```
## HTML
```vue
<vue-scrollbox mode="vertical" @scroll="onScroll" @resize="onResize">
  <h1>TEST</h1>
  <h1>TEST</h1>
  <h1>TEST</h1>
  <h1>TEST</h1>
</vue-scrollbox>
```
## Props
| Name | Type | Description |
| --- | --- | --- |
| `mode` | `String` | Select one of the options: `vertical`, `horizontal`, `auto`. **default: vertical** |
| `width` | `Number` | Fix canvas width. |
| `height` | `Number` | Fix canvas height. |

## Events
When the user scrolls contents `scroll` event will be dispatched.
When viewport or canvas changed size `resize` event will be dispatched.
```vue
...
methods: {
  onScroll (offset) {
    console.log('onScroll', offset)
  },
  onResize (viewport, canvas) {
    console.log('onResize', viewport, canvas)
  }
}
...
```

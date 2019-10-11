# Noty for VueJs (incl. FontAwesome Support)
A VueJS 2 wrapper around [Noty](http://ned.im/noty/).

Forked to add [FontAwesome](https://fontawesome.com/icons) support.

## Getting Started


Install using npm:

```bash
$ npm install vuejs-noty-fa
```

Import and register Vue plugin:

```js
import Vue from 'vue'
import VueNoty from 'vuejs-noty-fa'

Vue.use(VueNoty)
```

For use with Nuxt, create a new plugin:

```js

// /plugins/noty.js
import Vue from 'vue'
import VueNoty from 'vuejs-noty-fa'

export default () => {
  Vue.use(VueNoty)
}
```

.. and add it to `nuxt.config.js`

```js
plugins: [
  {src: '@/plugins/noty', ssr: false}
]
```


#### Import noty styles

Import stylesheet in your vue / js components:

```js
import 'vuejs-noty-fa/dist/vuejs-noty-fa.css'
```

Or, import styles in your less / scss stylesheet:

```less
@import '~vuejs-noty-fa/dist/vuejs-noty-fa.css';
```

Or, import styles for Nuxt inside `nuxt.config.js`:

```js
css: [
  'vuejs-noty-fa/dist/vuejs-noty-fa.css',
]
```

## Usage

In your Vue.js components, simply call one of these methods:

```js
// Basic alert
this.$noty.show("Hello world!")

// Success notification
this.$noty.success("Your profile has been saved!")

// Error message
this.$noty.error("Oops, something went wrong!")

// Warning
this.$noty.warning("Please review your information.")

// Basic alert
this.$noty.info("New version of the app is available!")

// Close all alerts
this.$noty.closeAll()
```

All of these methods will return a Noty object instance, so you can use available [API methods](https://ned.im/noty/#/api).

## Configuration

#### Config defaults

You can set a default configuration object when registering the plugin. Example:

```js
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topCenter'
})
```

#### Config override
 
All of the alert methods can accept a config object as second parameter if you need to override the defaults. Example:

```js
this.$noty.info("Hey! Something very important here...", {
  killer: true,
  timeout: 6000,
  layout: 'topRight'
}, ['fal', 'times-circle']) // fal is a FontAwesome Pro icon
```

For more information about available configuration properties, please read [Noty's documentation](https://ned.im/noty/#/options).



# vite-plugin-tailwind-obfusacte

A vite plugin to obfuscate tailwind css when building.


## Authors

- [@misbahansori](https://www.github.com/misbahansori)


## Supported frameworks

- Vue
- React
- Svelte *(coming soon)*


## Installation

Install plugin with npm

```bash
  npm install my-project
```

```
// https://vitejs.dev/config/

import obfuscate from "vite-plugin-tailwind-obfuscate";

export default defineConfig({
  plugins: [
    obfuscate()
  ],
});
```

## Configuration

```
export default defineConfig({
  plugins: [
    obfuscate({
      dev: true,  // by default it only run on production. set to true to run on development and production.
      min: 2,     // minimum number of characters in the obfuscated string.
      max: 8,     // maximum number of characters in the obfuscated string.
      length: 8,  // if length is provided, it will be used instead of min and max.
    })
  ],
});
```

    
## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Feedback

If you have any feedback, please reach out to us at misbah.ansori24@gmail.com


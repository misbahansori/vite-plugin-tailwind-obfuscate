
# vite-plugin-tailwind-obfusacte

A Vite plugin to obfuscate Tailwind CSS class when running on production.

<img width="962" alt="Screen Shot 2022-06-10 at 07 15 21" src="https://user-images.githubusercontent.com/20674057/172965716-fa2e62a3-1823-4abe-8a33-11b83cf0f56a.png">
<img width="958" alt="Screen Shot 2022-06-10 at 07 14 37" src="https://user-images.githubusercontent.com/20674057/172965725-f1f16f35-2611-4b6a-9d9d-851e006180ad.png">


## Installation


> **Warning**
> This plugin is still in development. Proceed with caution. 


Install plugin with npm

```bash
npm i vite-plugin-tailwind-obfuscate
```

``` js
// https://vitejs.dev/config/

import obfuscate from "vite-plugin-tailwind-obfuscate";

export default defineConfig({
  plugins: [
    obfuscate()
  ],
});
```

## Configuration

``` js
export default defineConfig({
  plugins: [
    obfuscate({
      dev: true,  // by default it only run on production. set to true to run on dev and production.
      min: 2,     // minimum number of characters in the obfuscated string.
      max: 8,     // maximum number of characters in the obfuscated string.
      length: 8,  // if length is provided, it will be used instead of min and max.
    })
  ],
});
```

## Supported frameworks

- Vue
- React
- Svelte *(coming soon)*
    
## Running Tests

To run tests, run the following command

```bash
npm run test
```


## Authors

- [@misbahansori](https://www.github.com/misbahansori)


## Feedback

If you have any feedback, please reach out to us at misbah.ansori24@gmail.com


# Missing Fooda Filters

Make your Fooda filters transform like this:<br>
![pic](https://github.com/simsalabim/fooda_filters/blob/master/missing_filters.png)

A Chrome extension adding missing filter by min/max price functionality to Fooda browse items page. Bookmarklet available.

## Chrome Extention

Install the extension from [Chrome Web Store](https://chrome.google.com/webstore/detail/missing-fooda-filters/mildgfejjefdhjfcfkbohkhinhodijco?hl=e://chrome.google.com/webstore/detail/missing-fooda-filters/mildgfejjefdhjfcfkbohkhinhodijco?hl=en)

## Bookmarklet

Q: But, why, really?<br>
A: For fun.

### Usage

If you for some reason don't like extensions you can add a bookmarklet to your browser and use it while on browsing the Fooda menu page.
Here's how you do that in Chrome: navigate to `Bookmarks -> Bookmark Manager -> Organize -> Add Page`, then input code from `bookmarklet/build/fooda_filters.js` in the `URL` fielURL` field.

### Development

```shell
npm install gulp-cli -g
npm install gulp -D
npm install --save-dev gulp-uglify
npm install --save-dev gulp-change
```

Make changes to `bookmarklet/fooda_filters.js` and then `gulp`, which will build a minified version and place it under `bookmarklet/build`.

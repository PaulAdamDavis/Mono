# Mono

A minimal theme for Ghost

* Multi-author
* Tag pages with description
* Author pages
* Pagination
* Featured posts
* Footnotes
* Syntax highlighting with [Prism](http://prismjs.com/) with support for:
    * Markup (HTML)
    * CSS (with extras)
    * SASS/Scss
    * Less
    * C-like
    * JavaScript
    * CoffeeScript
    * PHP (with extras)
    * Bash
    * Ruby
    * Git
    * Handlebars

**Coming Soon**

* Prep for commenting systems
* Cover image support for tag index, author index and single post pages

**Planned for the future**

* Navigation (via the Navigation UI in Ghost)

![Mono screenshot](http://i.imgur.com/uiPRlzB.jpg)

---

## Grunt Tasks

```
grunt styles
```

Watches `.scss` files for changes and compiles, then runs through autoprefixer

```
grunt makezip
```

Makes a zip of the theme which excluses `.scss` files, node modules and `Gruntfile.js`.
Zips are output into `build/`

---

## License

The MIT License (MIT)

Copyright (c) 2014 Paul Davis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
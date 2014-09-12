# CSS Codepoints

Generate CSS classes per font glyph.

## Example

```js
var cssCodepoints = require('css-codepoints');

var css = cssCodepoints({
  fontFamily: 'MySuperFont',
  prefix: 'icon-',
  formats: {
    svg: 'my_super_font.svg',
    ttf: 'my_super_font.ttf'
  },
  icons: {
    foo: 0x1337,
    bar: 0x266e
  }
});

fs.writeFileSync('generated.css', css);
```

generated.css:

```css
@font-face {
    font-family: "MySuperFont";
    src: url("my_super_font.svg") format("svg"),
         url("my_super_font.ttf") format("ttf");
}

.icon-foo::before {
    content: "\1337";
    font-family: "MySuperFont";
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
}
.icon-bar::before {
    content: "\266e";
    font-family: "MySuperFont";
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
}
```

## Options

| Option     | Required?  | Type                                                     |
| :--------- | :--------: | :------------------------------------------------------- |
| fontFamily | Yes        | string                                                   |
| formats    | Yes, &ge;1 | Object.<type: string, url: string>[]                     |
| icons      | No         | Object.<name: string, codepoint: {number&#x7c;string}>[] |
| prefix     | No         | string                                                   |

`options.fontFamily` is merely the value of `font-face` property.

`options.formats` describes the `@font-face`'s `src` property.

`options.icons` describes code points to generate classes for. Each `codepoint` value
should normally be a number, but for the sake of compatibility with JSON configs (which have no
notion of a hexadecimal number) it is allowed to be a string of hex digits instead.

`options.prefix` is the common class prefix, empty by default.

## License

MIT
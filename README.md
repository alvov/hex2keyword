# hex2keyword
GUI form for finding most similar available CSS colors with keywords relative to given hexadecimal color value.
Colors similarity is calculated by CIE76 algorithm.

The matching list is sorted by delta and can be filtered by CSS specification (the "CSS X" filter works like
"less than or equal to CSS X"). You may optionally view all available colors sorted from the most similar color
to the most opposing one.

**Note:** works only in browsers with es2015 support (because what the hell).

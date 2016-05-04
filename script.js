(function() {
    'use strict';

    const LIMIT = 5;

    const spec = [
        'CSS Level 1',
        'CSS Level 2 (Revision 1)',
        'CSS Color Module Level 3',
        'CSS Color Module Level 4'
    ];

    const colors = [
        {
            keyword: 'black',
            hex: '000000',
            spec: spec[0]
        },
 	    {
            keyword: 'silver',
            hex: 'c0c0c0',
            spec: spec[0]
        },
 	    {
            keyword: 'gray',
            hex: '808080',
            spec: spec[0]
        },
 	    {
            keyword: 'white',
            hex: 'ffffff',
            spec: spec[0]
        },
 	    {
            keyword: 'maroon',
            hex: '800000',
            spec: spec[0]
        },
 	    {
            keyword: 'red',
            hex: 'ff0000',
            spec: spec[0]
        },
 	    {
            keyword: 'purple',
            hex: '800080',
            spec: spec[0]
        },
 	    {
            keyword: 'fuchsia',
            hex: 'ff00ff',
            spec: spec[0]
        },
 	    {
            keyword: 'green',
            hex: '008000',
            spec: spec[0]
        },
 	    {
            keyword: 'lime',
            hex: '00ff00',
            spec: spec[0]
        },
 	    {
            keyword: 'olive',
            hex: '808000',
            spec: spec[0]
        },
 	    {
            keyword: 'yellow',
            hex: 'ffff00',
            spec: spec[0]
        },
 	    {
            keyword: 'navy',
            hex: '000080',
            spec: spec[0]
        },
 	    {
            keyword: 'blue',
            hex: '0000ff',
            spec: spec[0]
        },
 	    {
            keyword: 'teal',
            hex: '008080',
            spec: spec[0]
        },
 	    {
            keyword: 'aqua',
            hex: '00ffff',
            spec: spec[0]
        },
        {
            keyword: 'orange',
            hex: 'ffa500',
            spec: spec[1]
        },
        {
            keyword: 'aliceblue',
            hex: 'f0f8ff',
            spec: spec[2]
        },
 	    {
            keyword: 'antiquewhite',
            hex: 'faebd7',
            spec: spec[2]
        },
 	    {
            keyword: 'aquamarine',
            hex: '7fffd4',
            spec: spec[2]
        },
 	    {
            keyword: 'azure',
            hex: 'f0ffff',
            spec: spec[2]
        },
 	    {
            keyword: 'beige',
            hex: 'f5f5dc',
            spec: spec[2]
        },
 	    {
            keyword: 'bisque',
            hex: 'ffe4c4',
            spec: spec[2]
        },
 	    {
            keyword: 'blanchedalmond',
            hex: 'ffe4c4',
            spec: spec[2]
        },
 	    {
            keyword: 'blueviolet',
            hex: '8a2be2',
            spec: spec[2]
        },
 	    {
            keyword: 'brown',
            hex: 'a52a2a',
            spec: spec[2]
        },
 	    {
            keyword: 'burlywood',
            hex: 'deb887',
            spec: spec[2]
        },
 	    {
            keyword: 'cadetblue',
            hex: '5f9ea0',
            spec: spec[2]
        },
 	    {
            keyword: 'chartreuse',
            hex: '7fff00',
            spec: spec[2]
        },
 	    {
            keyword: 'chocolate',
            hex: 'd2691e',
            spec: spec[2]
        },
 	    {
            keyword: 'coral',
            hex: 'ff7f50',
            spec: spec[2]
        },
 	    {
            keyword: 'cornflowerblue',
            hex: '6495ed',
            spec: spec[2]
        },
 	    {
            keyword: 'cornsilk',
            hex: 'fff8dc',
            spec: spec[2]
        },
 	    {
            keyword: 'crimson',
            hex: 'dc143c',
            spec: spec[2]
        },
 	    {
            keyword: 'darkblue',
            hex: '00008b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkcyan',
            hex: '008b8b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkgoldenrod',
            hex: 'b8860b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkgray',
            hex: 'a9a9a9',
            spec: spec[2]
        },
 	    {
            keyword: 'darkgreen',
            hex: '006400',
            spec: spec[2]
        },
 	    {
            keyword: 'darkgrey',
            hex: 'a9a9a9',
            spec: spec[2]
        },
 	    {
            keyword: 'darkkhaki',
            hex: 'bdb76b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkmagenta',
            hex: '8b008b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkolivegreen',
            hex: '556b2f',
            spec: spec[2]
        },
 	    {
            keyword: 'darkorange',
            hex: 'ff8c00',
            spec: spec[2]
        },
 	    {
            keyword: 'darkorchid',
            hex: '9932cc',
            spec: spec[2]
        },
 	    {
            keyword: 'darkred',
            hex: '8b0000',
            spec: spec[2]
        },
 	    {
            keyword: 'darksalmon',
            hex: 'e9967a',
            spec: spec[2]
        },
 	    {
            keyword: 'darkseagreen',
            hex: '8fbc8f',
            spec: spec[2]
        },
 	    {
            keyword: 'darkslateblue',
            hex: '483d8b',
            spec: spec[2]
        },
 	    {
            keyword: 'darkslategray',
            hex: '2f4f4f',
            spec: spec[2]
        },
 	    {
            keyword: 'darkslategrey',
            hex: '2f4f4f',
            spec: spec[2]
        },
 	    {
            keyword: 'darkturquoise',
            hex: '00ced1',
            spec: spec[2]
        },
 	    {
            keyword: 'darkviolet',
            hex: '9400d3',
            spec: spec[2]
        },
 	    {
            keyword: 'deeppink',
            hex: 'ff1493',
            spec: spec[2]
        },
 	    {
            keyword: 'deepskyblue',
            hex: '00bfff',
            spec: spec[2]
        },
 	    {
            keyword: 'dimgray',
            hex: '696969',
            spec: spec[2]
        },
 	    {
            keyword: 'dimgrey',
            hex: '696969',
            spec: spec[2]
        },
 	    {
            keyword: 'dodgerblue',
            hex: '1e90ff',
            spec: spec[2]
        },
 	    {
            keyword: 'firebrick',
            hex: 'b22222',
            spec: spec[2]
        },
 	    {
            keyword: 'floralwhite',
            hex: 'fffaf0',
            spec: spec[2]
        },
 	    {
            keyword: 'forestgreen',
            hex: '228b22',
            spec: spec[2]
        },
 	    {
            keyword: 'gainsboro',
            hex: 'dcdcdc',
            spec: spec[2]
        },
 	    {
            keyword: 'ghostwhite',
            hex: 'f8f8ff',
            spec: spec[2]
        },
 	    {
            keyword: 'gold',
            hex: 'ffd700',
            spec: spec[2]
        },
 	    {
            keyword: 'goldenrod',
            hex: 'daa520',
            spec: spec[2]
        },
 	    {
            keyword: 'greenyellow',
            hex: 'adff2f',
            spec: spec[2]
        },
 	    {
            keyword: 'grey',
            hex: '808080',
            spec: spec[2]
        },
 	    {
            keyword: 'honeydew',
            hex: 'f0fff0',
            spec: spec[2]
        },
 	    {
            keyword: 'hotpink',
            hex: 'ff69b4',
            spec: spec[2]
        },
 	    {
            keyword: 'indianred',
            hex: 'cd5c5c',
            spec: spec[2]
        },
 	    {
            keyword: 'indigo',
            hex: '4b0082',
            spec: spec[2]
        },
 	    {
            keyword: 'ivory',
            hex: 'fffff0',
            spec: spec[2]
        },
 	    {
            keyword: 'khaki',
            hex: 'f0e68c',
            spec: spec[2]
        },
 	    {
            keyword: 'lavender',
            hex: 'e6e6fa',
            spec: spec[2]
        },
 	    {
            keyword: 'lavenderblush',
            hex: 'fff0f5',
            spec: spec[2]
        },
 	    {
            keyword: 'lawngreen',
            hex: '7cfc00',
            spec: spec[2]
        },
 	    {
            keyword: 'lemonchiffon',
            hex: 'fffacd',
            spec: spec[2]
        },
 	    {
            keyword: 'lightblue',
            hex: 'add8e6',
            spec: spec[2]
        },
 	    {
            keyword: 'lightcoral',
            hex: 'f08080',
            spec: spec[2]
        },
 	    {
            keyword: 'lightcyan',
            hex: 'e0ffff',
            spec: spec[2]
        },
 	    {
            keyword: 'lightgoldenrodyellow',
            hex: 'fafad2',
            spec: spec[2]
        },
 	    {
            keyword: 'lightgray',
            hex: 'd3d3d3',
            spec: spec[2]
        },
 	    {
            keyword: 'lightgreen',
            hex: '90ee90',
            spec: spec[2]
        },
 	    {
            keyword: 'lightgrey',
            hex: 'd3d3d3',
            spec: spec[2]
        },
 	    {
            keyword: 'lightpink',
            hex: 'ffb6c1',
            spec: spec[2]
        },
 	    {
            keyword: 'lightsalmon',
            hex: 'ffa07a',
            spec: spec[2]
        },
 	    {
            keyword: 'lightseagreen',
            hex: '20b2aa',
            spec: spec[2]
        },
 	    {
            keyword: 'lightskyblue',
            hex: '87cefa',
            spec: spec[2]
        },
 	    {
            keyword: 'lightslategray',
            hex: '778899',
            spec: spec[2]
        },
 	    {
            keyword: 'lightslategrey',
            hex: '778899',
            spec: spec[2]
        },
 	    {
            keyword: 'lightsteelblue',
            hex: 'b0c4de',
            spec: spec[2]
        },
 	    {
            keyword: 'lightyellow',
            hex: 'ffffe0',
            spec: spec[2]
        },
 	    {
            keyword: 'limegreen',
            hex: '32cd32',
            spec: spec[2]
        },
 	    {
            keyword: 'linen',
            hex: 'faf0e6',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumaquamarine',
            hex: '66cdaa',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumblue',
            hex: '0000cd',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumorchid',
            hex: 'ba55d3',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumpurple',
            hex: '9370db',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumseagreen',
            hex: '3cb371',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumslateblue',
            hex: '7b68ee',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumspringgreen',
            hex: '00fa9a',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumturquoise',
            hex: '48d1cc',
            spec: spec[2]
        },
 	    {
            keyword: 'mediumvioletred',
            hex: 'c71585',
            spec: spec[2]
        },
 	    {
            keyword: 'midnightblue',
            hex: '191970',
            spec: spec[2]
        },
 	    {
            keyword: 'mintcream',
            hex: 'f5fffa',
            spec: spec[2]
        },
 	    {
            keyword: 'mistyrose',
            hex: 'ffe4e1',
            spec: spec[2]
        },
 	    {
            keyword: 'moccasin',
            hex: 'ffe4b5',
            spec: spec[2]
        },
 	    {
            keyword: 'navajowhite',
            hex: 'ffdead',
            spec: spec[2]
        },
 	    {
            keyword: 'oldlace',
            hex: 'fdf5e6',
            spec: spec[2]
        },
 	    {
            keyword: 'olivedrab',
            hex: '6b8e23',
            spec: spec[2]
        },
 	    {
            keyword: 'orangered',
            hex: 'ff4500',
            spec: spec[2]
        },
 	    {
            keyword: 'orchid',
            hex: 'da70d6',
            spec: spec[2]
        },
 	    {
            keyword: 'palegoldenrod',
            hex: 'eee8aa',
            spec: spec[2]
        },
 	    {
            keyword: 'palegreen',
            hex: '98fb98',
            spec: spec[2]
        },
 	    {
            keyword: 'paleturquoise',
            hex: 'afeeee',
            spec: spec[2]
        },
 	    {
            keyword: 'palevioletred',
            hex: 'db7093',
            spec: spec[2]
        },
 	    {
            keyword: 'papayawhip',
            hex: 'ffefd5',
            spec: spec[2]
        },
 	    {
            keyword: 'peachpuff',
            hex: 'ffdab9',
            spec: spec[2]
        },
 	    {
            keyword: 'peru',
            hex: 'cd853f',
            spec: spec[2]
        },
 	    {
            keyword: 'pink',
            hex: 'ffc0cb',
            spec: spec[2]
        },
 	    {
            keyword: 'plum',
            hex: 'dda0dd',
            spec: spec[2]
        },
 	    {
            keyword: 'powderblue',
            hex: 'b0e0e6',
            spec: spec[2]
        },
 	    {
            keyword: 'rosybrown',
            hex: 'bc8f8f',
            spec: spec[2]
        },
 	    {
            keyword: 'royalblue',
            hex: '4169e1',
            spec: spec[2]
        },
 	    {
            keyword: 'saddlebrown',
            hex: '8b4513',
            spec: spec[2]
        },
 	    {
            keyword: 'salmon',
            hex: 'fa8072',
            spec: spec[2]
        },
 	    {
            keyword: 'sandybrown',
            hex: 'f4a460',
            spec: spec[2]
        },
 	    {
            keyword: 'seagreen',
            hex: '2e8b57',
            spec: spec[2]
        },
 	    {
            keyword: 'seashell',
            hex: 'fff5ee',
            spec: spec[2]
        },
 	    {
            keyword: 'sienna',
            hex: 'a0522d',
            spec: spec[2]
        },
 	    {
            keyword: 'skyblue',
            hex: '87ceeb',
            spec: spec[2]
        },
 	    {
            keyword: 'slateblue',
            hex: '6a5acd',
            spec: spec[2]
        },
 	    {
            keyword: 'slategray',
            hex: '708090',
            spec: spec[2]
        },
 	    {
            keyword: 'slategrey',
            hex: '708090',
            spec: spec[2]
        },
 	    {
            keyword: 'snow',
            hex: 'fffafa',
            spec: spec[2]
        },
 	    {
            keyword: 'springgreen',
            hex: '00ff7f',
            spec: spec[2]
        },
 	    {
            keyword: 'steelblue',
            hex: '4682b4',
            spec: spec[2]
        },
 	    {
            keyword: 'tan',
            hex: 'd2b48c',
            spec: spec[2]
        },
 	    {
            keyword: 'thistle',
            hex: 'd8bfd8',
            spec: spec[2]
        },
 	    {
            keyword: 'tomato',
            hex: 'ff6347',
            spec: spec[2]
        },
 	    {
            keyword: 'turquoise',
            hex: '40e0d0',
            spec: spec[2]
        },
 	    {
            keyword: 'violet',
            hex: 'ee82ee',
            spec: spec[2]
        },
 	    {
            keyword: 'wheat',
            hex: 'f5deb3',
            spec: spec[2]
        },
 	    {
            keyword: 'whitesmoke',
            hex: 'f5f5f5',
            spec: spec[2]
        },
 	    {
            keyword: 'yellowgreen',
            hex: '9acd32',
            spec: spec[2]
        },
        {
            keyword: 'rebeccapurple',
            hex: '663399',
            spec: spec[3]
        }
    ];

    const outputNode = document.querySelector('.js-form-output');

    const specFieldsetNode = document.querySelector('.js-form-fieldset-spec');
    const specNodes = [];
    specFieldsetNode.appendChild(['Don\'t filter'].concat(spec).reduce((fragment, specName, index) => {
        const labelNode = document.createElement('label');
        labelNode.className = 'form-label-inline';
        const inputNode = document.createElement('input');
        inputNode.type = 'radio';
        inputNode.name = 'spec';
        inputNode.value = index;
        inputNode.checked = index === 0;
        labelNode.appendChild(inputNode);
        const textNode = document.createTextNode((index > 1 ? '≤ ' : '') + specName);
        labelNode.appendChild(textNode);
        fragment.appendChild(labelNode);
        specNodes.push(inputNode);
        return fragment;
    }, document.createDocumentFragment()));

    checkHex();

    hexCode.addEventListener('input', checkHex);
    specFieldsetNode.addEventListener('change', e => {
        if (specNodes.includes(e.target)) {
            checkHex();
        }
    });

    function checkHex() {
        let result = [];
        if (hexCode.validity.valid) {
            const colorRGB = hex2rgb(hexCode.value);
            const filterSpec = Number(specNodes.find(specNode => specNode.checked).value);
            if (filterSpec) {
                result = colors.filter(color => spec.slice(0, filterSpec).includes(color.spec))
            } else {
                result = colors;
            }
            result = result
                .map(color => {
                    const delta = rgbDelta(colorRGB, hex2rgb(color.hex));
                    return Object.assign(color, { delta });
                })
                .sort((a, b) => a.delta - b.delta)
                .slice(0, LIMIT);
            result.unshift({
                spec: 'Your color',
                hex: hexCode.value,
                keyword: ''
            });
        }
        output(result);
    }

    function output(data) {
        outputNode.innerHTML = '';
        outputNode.appendChild(data.reduce((fragment, color) => {
            const rowNode = document.createElement('div');
            rowNode.className = 'form-output-row';
            const specCellNode = document.createElement('div');
            specCellNode.textContent = color.spec;
            rowNode.appendChild(specCellNode);
            const colorCellNode = document.createElement('div');
            colorCellNode.style.backgroundColor = '#' + color.hex;
            rowNode.appendChild(colorCellNode);
            const keywordCellNode = document.createElement('div');
            keywordCellNode.textContent = color.keyword;
            rowNode.appendChild(keywordCellNode);
            const hexCellNode = document.createElement('div');
            hexCellNode.textContent = '#' + color.hex;
            rowNode.appendChild(hexCellNode);
            fragment.appendChild(rowNode);
            return fragment;
        }, document.createDocumentFragment()));
    }

    function rgbDelta(rgb1, rgb2) {
        return rgb1
            .map((value, index) => Math.abs(value - rgb2[index]))
            .reduce((a, b) => a + b);
    }

    function hex2rgb(hex) {
        return hex.match(/\w\w/g).map(value => parseInt(value, 16));
    }
})();

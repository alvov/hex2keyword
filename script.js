(function() {
    'use strict';

    const spec = [
        ['CSS 1', 'CSS Level 1'],
        ['CSS 2', 'CSS Level 2 (Revision 1)'],
        ['CSS 3', 'CSS Color Module Level 3'],
        ['CSS 4', 'CSS Color Module Level 4']
    ];

    const colors = [
        {
            keyword: 'black',
            hex: '000000',
            spec: 0
        },
 	    {
            keyword: 'silver',
            hex: 'c0c0c0',
            spec: 0
        },
 	    {
            keyword: 'gray',
            hex: '808080',
            spec: 0
        },
 	    {
            keyword: 'white',
            hex: 'ffffff',
            spec: 0
        },
 	    {
            keyword: 'maroon',
            hex: '800000',
            spec: 0
        },
 	    {
            keyword: 'red',
            hex: 'ff0000',
            spec: 0
        },
 	    {
            keyword: 'purple',
            hex: '800080',
            spec: 0
        },
 	    {
            keyword: 'fuchsia',
            hex: 'ff00ff',
            spec: 0
        },
 	    {
            keyword: 'green',
            hex: '008000',
            spec: 0
        },
 	    {
            keyword: 'lime',
            hex: '00ff00',
            spec: 0
        },
 	    {
            keyword: 'olive',
            hex: '808000',
            spec: 0
        },
 	    {
            keyword: 'yellow',
            hex: 'ffff00',
            spec: 0
        },
 	    {
            keyword: 'navy',
            hex: '000080',
            spec: 0
        },
 	    {
            keyword: 'blue',
            hex: '0000ff',
            spec: 0
        },
 	    {
            keyword: 'teal',
            hex: '008080',
            spec: 0
        },
 	    {
            keyword: 'aqua',
            hex: '00ffff',
            spec: 0
        },
        {
            keyword: 'orange',
            hex: 'ffa500',
            spec: 1
        },
        {
            keyword: 'aliceblue',
            hex: 'f0f8ff',
            spec: 2
        },
 	    {
            keyword: 'antiquewhite',
            hex: 'faebd7',
            spec: 2
        },
 	    {
            keyword: 'aquamarine',
            hex: '7fffd4',
            spec: 2
        },
 	    {
            keyword: 'azure',
            hex: 'f0ffff',
            spec: 2
        },
 	    {
            keyword: 'beige',
            hex: 'f5f5dc',
            spec: 2
        },
 	    {
            keyword: 'bisque',
            hex: 'ffe4c4',
            spec: 2
        },
 	    {
            keyword: 'blanchedalmond',
            hex: 'ffe4c4',
            spec: 2
        },
 	    {
            keyword: 'blueviolet',
            hex: '8a2be2',
            spec: 2
        },
 	    {
            keyword: 'brown',
            hex: 'a52a2a',
            spec: 2
        },
 	    {
            keyword: 'burlywood',
            hex: 'deb887',
            spec: 2
        },
 	    {
            keyword: 'cadetblue',
            hex: '5f9ea0',
            spec: 2
        },
 	    {
            keyword: 'chartreuse',
            hex: '7fff00',
            spec: 2
        },
 	    {
            keyword: 'chocolate',
            hex: 'd2691e',
            spec: 2
        },
 	    {
            keyword: 'coral',
            hex: 'ff7f50',
            spec: 2
        },
 	    {
            keyword: 'cornflowerblue',
            hex: '6495ed',
            spec: 2
        },
 	    {
            keyword: 'cornsilk',
            hex: 'fff8dc',
            spec: 2
        },
 	    {
            keyword: 'crimson',
            hex: 'dc143c',
            spec: 2
        },
 	    {
            keyword: 'darkblue',
            hex: '00008b',
            spec: 2
        },
 	    {
            keyword: 'darkcyan',
            hex: '008b8b',
            spec: 2
        },
 	    {
            keyword: 'darkgoldenrod',
            hex: 'b8860b',
            spec: 2
        },
 	    {
            keyword: 'darkgray',
            hex: 'a9a9a9',
            spec: 2
        },
 	    {
            keyword: 'darkgreen',
            hex: '006400',
            spec: 2
        },
 	    {
            keyword: 'darkgrey',
            hex: 'a9a9a9',
            spec: 2
        },
 	    {
            keyword: 'darkkhaki',
            hex: 'bdb76b',
            spec: 2
        },
 	    {
            keyword: 'darkmagenta',
            hex: '8b008b',
            spec: 2
        },
 	    {
            keyword: 'darkolivegreen',
            hex: '556b2f',
            spec: 2
        },
 	    {
            keyword: 'darkorange',
            hex: 'ff8c00',
            spec: 2
        },
 	    {
            keyword: 'darkorchid',
            hex: '9932cc',
            spec: 2
        },
 	    {
            keyword: 'darkred',
            hex: '8b0000',
            spec: 2
        },
 	    {
            keyword: 'darksalmon',
            hex: 'e9967a',
            spec: 2
        },
 	    {
            keyword: 'darkseagreen',
            hex: '8fbc8f',
            spec: 2
        },
 	    {
            keyword: 'darkslateblue',
            hex: '483d8b',
            spec: 2
        },
 	    {
            keyword: 'darkslategray',
            hex: '2f4f4f',
            spec: 2
        },
 	    {
            keyword: 'darkslategrey',
            hex: '2f4f4f',
            spec: 2
        },
 	    {
            keyword: 'darkturquoise',
            hex: '00ced1',
            spec: 2
        },
 	    {
            keyword: 'darkviolet',
            hex: '9400d3',
            spec: 2
        },
 	    {
            keyword: 'deeppink',
            hex: 'ff1493',
            spec: 2
        },
 	    {
            keyword: 'deepskyblue',
            hex: '00bfff',
            spec: 2
        },
 	    {
            keyword: 'dimgray',
            hex: '696969',
            spec: 2
        },
 	    {
            keyword: 'dimgrey',
            hex: '696969',
            spec: 2
        },
 	    {
            keyword: 'dodgerblue',
            hex: '1e90ff',
            spec: 2
        },
 	    {
            keyword: 'firebrick',
            hex: 'b22222',
            spec: 2
        },
 	    {
            keyword: 'floralwhite',
            hex: 'fffaf0',
            spec: 2
        },
 	    {
            keyword: 'forestgreen',
            hex: '228b22',
            spec: 2
        },
 	    {
            keyword: 'gainsboro',
            hex: 'dcdcdc',
            spec: 2
        },
 	    {
            keyword: 'ghostwhite',
            hex: 'f8f8ff',
            spec: 2
        },
 	    {
            keyword: 'gold',
            hex: 'ffd700',
            spec: 2
        },
 	    {
            keyword: 'goldenrod',
            hex: 'daa520',
            spec: 2
        },
 	    {
            keyword: 'greenyellow',
            hex: 'adff2f',
            spec: 2
        },
 	    {
            keyword: 'grey',
            hex: '808080',
            spec: 2
        },
 	    {
            keyword: 'honeydew',
            hex: 'f0fff0',
            spec: 2
        },
 	    {
            keyword: 'hotpink',
            hex: 'ff69b4',
            spec: 2
        },
 	    {
            keyword: 'indianred',
            hex: 'cd5c5c',
            spec: 2
        },
 	    {
            keyword: 'indigo',
            hex: '4b0082',
            spec: 2
        },
 	    {
            keyword: 'ivory',
            hex: 'fffff0',
            spec: 2
        },
 	    {
            keyword: 'khaki',
            hex: 'f0e68c',
            spec: 2
        },
 	    {
            keyword: 'lavender',
            hex: 'e6e6fa',
            spec: 2
        },
 	    {
            keyword: 'lavenderblush',
            hex: 'fff0f5',
            spec: 2
        },
 	    {
            keyword: 'lawngreen',
            hex: '7cfc00',
            spec: 2
        },
 	    {
            keyword: 'lemonchiffon',
            hex: 'fffacd',
            spec: 2
        },
 	    {
            keyword: 'lightblue',
            hex: 'add8e6',
            spec: 2
        },
 	    {
            keyword: 'lightcoral',
            hex: 'f08080',
            spec: 2
        },
 	    {
            keyword: 'lightcyan',
            hex: 'e0ffff',
            spec: 2
        },
 	    {
            keyword: 'lightgoldenrodyellow',
            hex: 'fafad2',
            spec: 2
        },
 	    {
            keyword: 'lightgray',
            hex: 'd3d3d3',
            spec: 2
        },
 	    {
            keyword: 'lightgreen',
            hex: '90ee90',
            spec: 2
        },
 	    {
            keyword: 'lightgrey',
            hex: 'd3d3d3',
            spec: 2
        },
 	    {
            keyword: 'lightpink',
            hex: 'ffb6c1',
            spec: 2
        },
 	    {
            keyword: 'lightsalmon',
            hex: 'ffa07a',
            spec: 2
        },
 	    {
            keyword: 'lightseagreen',
            hex: '20b2aa',
            spec: 2
        },
 	    {
            keyword: 'lightskyblue',
            hex: '87cefa',
            spec: 2
        },
 	    {
            keyword: 'lightslategray',
            hex: '778899',
            spec: 2
        },
 	    {
            keyword: 'lightslategrey',
            hex: '778899',
            spec: 2
        },
 	    {
            keyword: 'lightsteelblue',
            hex: 'b0c4de',
            spec: 2
        },
 	    {
            keyword: 'lightyellow',
            hex: 'ffffe0',
            spec: 2
        },
 	    {
            keyword: 'limegreen',
            hex: '32cd32',
            spec: 2
        },
 	    {
            keyword: 'linen',
            hex: 'faf0e6',
            spec: 2
        },
 	    {
            keyword: 'mediumaquamarine',
            hex: '66cdaa',
            spec: 2
        },
 	    {
            keyword: 'mediumblue',
            hex: '0000cd',
            spec: 2
        },
 	    {
            keyword: 'mediumorchid',
            hex: 'ba55d3',
            spec: 2
        },
 	    {
            keyword: 'mediumpurple',
            hex: '9370db',
            spec: 2
        },
 	    {
            keyword: 'mediumseagreen',
            hex: '3cb371',
            spec: 2
        },
 	    {
            keyword: 'mediumslateblue',
            hex: '7b68ee',
            spec: 2
        },
 	    {
            keyword: 'mediumspringgreen',
            hex: '00fa9a',
            spec: 2
        },
 	    {
            keyword: 'mediumturquoise',
            hex: '48d1cc',
            spec: 2
        },
 	    {
            keyword: 'mediumvioletred',
            hex: 'c71585',
            spec: 2
        },
 	    {
            keyword: 'midnightblue',
            hex: '191970',
            spec: 2
        },
 	    {
            keyword: 'mintcream',
            hex: 'f5fffa',
            spec: 2
        },
 	    {
            keyword: 'mistyrose',
            hex: 'ffe4e1',
            spec: 2
        },
 	    {
            keyword: 'moccasin',
            hex: 'ffe4b5',
            spec: 2
        },
 	    {
            keyword: 'navajowhite',
            hex: 'ffdead',
            spec: 2
        },
 	    {
            keyword: 'oldlace',
            hex: 'fdf5e6',
            spec: 2
        },
 	    {
            keyword: 'olivedrab',
            hex: '6b8e23',
            spec: 2
        },
 	    {
            keyword: 'orangered',
            hex: 'ff4500',
            spec: 2
        },
 	    {
            keyword: 'orchid',
            hex: 'da70d6',
            spec: 2
        },
 	    {
            keyword: 'palegoldenrod',
            hex: 'eee8aa',
            spec: 2
        },
 	    {
            keyword: 'palegreen',
            hex: '98fb98',
            spec: 2
        },
 	    {
            keyword: 'paleturquoise',
            hex: 'afeeee',
            spec: 2
        },
 	    {
            keyword: 'palevioletred',
            hex: 'db7093',
            spec: 2
        },
 	    {
            keyword: 'papayawhip',
            hex: 'ffefd5',
            spec: 2
        },
 	    {
            keyword: 'peachpuff',
            hex: 'ffdab9',
            spec: 2
        },
 	    {
            keyword: 'peru',
            hex: 'cd853f',
            spec: 2
        },
 	    {
            keyword: 'pink',
            hex: 'ffc0cb',
            spec: 2
        },
 	    {
            keyword: 'plum',
            hex: 'dda0dd',
            spec: 2
        },
 	    {
            keyword: 'powderblue',
            hex: 'b0e0e6',
            spec: 2
        },
 	    {
            keyword: 'rosybrown',
            hex: 'bc8f8f',
            spec: 2
        },
 	    {
            keyword: 'royalblue',
            hex: '4169e1',
            spec: 2
        },
 	    {
            keyword: 'saddlebrown',
            hex: '8b4513',
            spec: 2
        },
 	    {
            keyword: 'salmon',
            hex: 'fa8072',
            spec: 2
        },
 	    {
            keyword: 'sandybrown',
            hex: 'f4a460',
            spec: 2
        },
 	    {
            keyword: 'seagreen',
            hex: '2e8b57',
            spec: 2
        },
 	    {
            keyword: 'seashell',
            hex: 'fff5ee',
            spec: 2
        },
 	    {
            keyword: 'sienna',
            hex: 'a0522d',
            spec: 2
        },
 	    {
            keyword: 'skyblue',
            hex: '87ceeb',
            spec: 2
        },
 	    {
            keyword: 'slateblue',
            hex: '6a5acd',
            spec: 2
        },
 	    {
            keyword: 'slategray',
            hex: '708090',
            spec: 2
        },
 	    {
            keyword: 'slategrey',
            hex: '708090',
            spec: 2
        },
 	    {
            keyword: 'snow',
            hex: 'fffafa',
            spec: 2
        },
 	    {
            keyword: 'springgreen',
            hex: '00ff7f',
            spec: 2
        },
 	    {
            keyword: 'steelblue',
            hex: '4682b4',
            spec: 2
        },
 	    {
            keyword: 'tan',
            hex: 'd2b48c',
            spec: 2
        },
 	    {
            keyword: 'thistle',
            hex: 'd8bfd8',
            spec: 2
        },
 	    {
            keyword: 'tomato',
            hex: 'ff6347',
            spec: 2
        },
 	    {
            keyword: 'turquoise',
            hex: '40e0d0',
            spec: 2
        },
 	    {
            keyword: 'violet',
            hex: 'ee82ee',
            spec: 2
        },
 	    {
            keyword: 'wheat',
            hex: 'f5deb3',
            spec: 2
        },
 	    {
            keyword: 'whitesmoke',
            hex: 'f5f5f5',
            spec: 2
        },
 	    {
            keyword: 'yellowgreen',
            hex: '9acd32',
            spec: 2
        },
        {
            keyword: 'rebeccapurple',
            hex: '663399',
            spec: 3
        }
    ];
    // add lab
    colors.forEach(color => {
        color.lab = hex2lab(color.hex);
    });

    let state = {
        limit: null,
        currentResult: null
    };

    const outputNode = document.querySelector('.js-form-output');
    const outputLimitSelectNode = document.querySelector('.js-form-output-limit-select');
    state.limit = Number(outputLimitSelectNode.value);
    const outputLimitTextNode = document.createTextNode('');
    outputLimitSelectNode.parentNode.insertBefore(outputLimitTextNode, outputLimitSelectNode);
    setOutputLimitText();

    const specFieldsetNode = document.querySelector('.js-form-fieldset_spec');
    const specNodes = [];
    specFieldsetNode.appendChild(
        [['Don\'t filter']].concat(spec).reduce((fragment, specNames, index) => {
            const inputNode = document.createElement('input');
            inputNode.type = 'radio';
            inputNode.name = 'spec';
            inputNode.id = 'spec' + index;
            inputNode.className = 'form-input-radio';
            inputNode.value = index;
            inputNode.checked = index === 0;
            fragment.appendChild(inputNode);
            const textFullNode = document.createElement('span');
            textFullNode.className = 'form-label-text form-label-text_full';
            textFullNode.textContent = specNames[1] || specNames[0];
            const textShortNode = document.createElement('span');
            textShortNode.className = 'form-label-text form-label-text_short';
            textShortNode.textContent = specNames[0];
            const labelNode = document.createElement('label');
            labelNode.className = 'form-label';
            labelNode.htmlFor = 'spec' + index;
            labelNode.appendChild(textFullNode);
            labelNode.appendChild(textShortNode);
            fragment.appendChild(labelNode);
            specNodes.push(inputNode);
            return fragment;
        }, document.createDocumentFragment())
    );

    getSimilarColors();

    hexCode.addEventListener('input', getSimilarColors);
    specFieldsetNode.addEventListener('change', e => {
        if (specNodes.includes(e.target)) {
            getSimilarColors();
        }
    });
    outputLimitSelectNode.addEventListener('change', e => {
        state.limit = Number(e.target.value);
        setOutputLimitText();
        output(limit(state.currentResult));
    });

    function getSimilarColors() {
        let result = [];
        if (hexCode.validity.valid) {
            const filterSpec = Number(specNodes.find(specNode => specNode.checked).value);
            if (filterSpec) {
                result = colors.filter(color => color.spec + 1 <= filterSpec)
            } else {
                result = colors;
            }
            const colorLab = hex2lab(hexCode.value);
            result = result
                .map(color => Object.assign(color, { deltaE: getDeltaE(colorLab, color.lab) }))
                .sort((a, b) => a.deltaE - b.deltaE);
            result.unshift({
                spec: null,
                hex: hexCode.value,
                keyword: 'your_color',
                deltaE: ''
            });
            state.currentResult = result;
            result = limit(result);
        }
        output(result);
    }

    function output(data) {
        outputNode.innerHTML = '';
        outputNode.appendChild(data.reduce((fragment, color) => {
            const rowNode = document.createElement('div');
            rowNode.className = 'form-output-row';
            const specCellNode = document.createElement('div');
            if (color.spec !== null) {
                const specTextFullNode = document.createElement('span');
                specTextFullNode.className = 'form-output-spec-text_full';
                specTextFullNode.textContent = spec[color.spec][1] || spec[color.spec][0];
                const specTextShortNode = document.createElement('span');
                specTextShortNode.className = 'form-output-spec-text_short';
                specTextShortNode.textContent = spec[color.spec][0];
                specCellNode.appendChild(specTextFullNode);
                specCellNode.appendChild(specTextShortNode);
            }
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
            const deltaCellNode = document.createElement('div');
            deltaCellNode.textContent = color.deltaE ? color.deltaE.toFixed(2) : color.deltaE;
            rowNode.appendChild(deltaCellNode);
            fragment.appendChild(rowNode);
            return fragment;
        }, document.createDocumentFragment()));
    }

    function getDeltaE(lab1, lab2) {
        return Math.sqrt(lab2.reduce((sum, q, i) => sum + Math.pow(q - lab1[i], 2), 0));
    }

    function hex2rgb(hex) {
        return hex.match(/\w\w/g).map(value => parseInt(value, 16));
    }

    function hex2xyz(hex) {
        const rgb = hex2rgb(hex);
        for (let i = 0; i < 3; i++) {
            rgb[i] /= 255;
            rgb[i] = rgb[i] > 0.04045 ? Math.pow(((rgb[i] + 0.055) / 1.055), 2.4) : (rgb[i] / 12.92);
        }
        return [
            (rgb[0] * 0.4124) + (rgb[1] * 0.3576) + (rgb[2] * 0.1805),
            (rgb[0] * 0.2126) + (rgb[1] * 0.7152) + (rgb[2] * 0.0722),
            (rgb[0] * 0.0193) + (rgb[1] * 0.1192) + (rgb[2] * 0.9505)
        ].map(q => q * 100);
    }

    function hex2lab(hex) {
        let xyz = hex2xyz(hex);
        xyz[0] /= 95.047;
        xyz[1] /= 100;
        xyz[2] /= 108.883;

        xyz = xyz.map(q => {
            return q > 0.008856 ? Math.pow(q, 1 / 3) : (7.787 * q) + (16 / 116);
        });

        return [
            (116 * xyz[1]) - 16,
            500 * (xyz[0] - xyz[1]),
            200 * (xyz[1] - xyz[2])
        ];
    }

    function limit(data) {
        return data.slice(0, state.limit + 1);
    }

    function setOutputLimitText() {
        outputLimitTextNode.textContent =
            outputLimitSelectNode[outputLimitSelectNode.selectedIndex].textContent;
    }
})();

// element variables
const footerEl = document.getElementsByTagName('footer');
//const colorScroll = document.getElementById("color-scroll");

// form variables
const colorForm = document.getElementById("color-form");
const colorIn = document.getElementById("color-in");

colorForm.addEventListener("submit", matchColor);

function initScroll() {

    for (let i = 0; i < threadBasic.length; i++) {
        const newColor = document.createElement('div');
        newColor.style.backgroundColor = 'rgb(' + threadBasic[i][0] + ', ' + threadBasic[i][1] + ', ' + threadBasic[i][2] + ')';
        colorScroll.append(newColor);
    }
};

function matchColor(event) {
    event.preventDefault();

    if (document.getElementById('main-result')) {
        document.getElementById('main-result').remove();
    }
    if (document.getElementById('close-container')) {
        document.getElementById('close-container').remove();
    }

    const content = document.querySelector('#color-in').value;

    const red = parseInt(content.substring(1, 3), 16);
    const green = parseInt(content.substring(3, 5), 16);
    const blue = parseInt(content.substring(5, 7), 16);

    const rgb = [red, green, blue];
    const threadDistance = [];

    for (let i = 0; i < threadBasic.length; i++) {

        const redDiff = Math.pow(threadBasic[i][0] - rgb[0], 2);
        const greenDiff = Math.pow(threadBasic[i][1] - rgb[1], 2);
        const blueDiff = Math.pow(threadBasic[i][2] - rgb[2], 2);

        const totalDist = redDiff + greenDiff + blueDiff;

        threadDistance.push(totalDist);
    }

    const closeThreads = [];
    const closeIndex = [];

    while (closeThreads.length < 6) {

        let minDistance = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;

        for (let i = 0; i < threadDistance.length; i++) {
            if (!closeIndex.includes(i)) {
                if (threadDistance[i] < minDistance) {
                    minDistance = threadDistance[i];
                    minIndex = i;
                }
            }
        }

    closeThreads.push(threadBasic[minIndex]);
    closeIndex.push(minIndex);

    }

    // attach closest match
    const divMainResult = document.createElement('div');
    divMainResult.id = 'main-result';

    const threadNumber = document.createElement('h3');
    threadNumber.id = 'thread-number';
    threadNumber.textContent = closeThreads[0][3];

    const threadName = document.createElement('h5');
    threadName.id = 'thread-name';
    threadName.textContent = closeThreads[0][4];

    const divColor = document.createElement('div');
    divColor.id = 'color-out';
    divColor.style.backgroundColor = 'rgb(' + closeThreads[0][0] + ', ' + closeThreads[0][1] + ', ' + closeThreads[0][2] + ')';
    divColor.textContent = ' ';

    const divCloseContainer = document.createElement('div');
    divCloseContainer.id = 'close-container';

    divMainResult.append(threadNumber, divColor, threadName);
    footerEl[0].append(divMainResult, divCloseContainer);
    // footerEl[0].insertBefore(divMainResult, colorScroll);


    for (let i = 1; i <= 5; i++) {

        const divCloseResult = document.createElement('div');
        divCloseResult.id = 'close-result';

        const closeColor = document.createElement('div');
        closeColor.className = 'close-color';
        closeColor.style.backgroundColor = 'rgb(' + closeThreads[i][0] + ', ' + closeThreads[i][1] + ', ' + closeThreads[i][2] + ')';
        closeColor.textContent = ' ';

        const closeNumber = document.createElement('h4');
        closeNumber.textContent = closeThreads[i][3];

        divCloseResult.append(closeColor, closeNumber);
        divCloseContainer.append(divCloseResult);

    }


}

// [R, G, B, number, name, family]
const threadBasic = [ // 481 total

    // 1 -- 23 colors
    [ 246, 194, 203,  '3713',   'rose quartz',                      'salmon'],
    [ 245, 165, 178,   '761',   'rose dawn',                        'salmon'],
    [ 239, 112, 125,   '760',   'dusty pink',                       'salmon'],
    [ 230,  80,  91,  '3712',   'blush',                            'salmon'],
    [ 213,  55,  64,  '3328',   'amaranth',                         'salmon'],
    [ 203,  31,  41,   '347',   'egyptian red',                     'salmon'],

    [ 244, 120,  96,   '352',   'salmon',                           'coral'],
    [ 236,  61,  46,   '351',   'coral',                            'coral'],
    [ 227,  40,  32,   '350',   'vermillion',                       'coral'],
    [ 199,   2,  27,   '349',   'red pepper',                       'coral'],
    [ 191,   0,  19,   '817',   'japanese red',                     'coral'],

    [ 231,  75, 111,  '3833',   'strawberry sorbet',                'raspberry'],
    [ 222,  39,  76,  '3832',   'strawberry',                       'raspberry'],
    [ 192,  24,  46,  '3831',   'wild strawberry',                  'raspberry'],
    [ 126,   4,  27,   '777',   'wine',                             'raspberry'],

    [ 235,   2,  21,   '666',   'scarlet',                          'red'],
    [ 197,   0,  25,   '321',   'metallic carmine red',             'red'],
    [ 180,   1,  38,   '304',   'chinese lacquer',                  'red'],
    [ 145,   0,  27,   '498',   'red kiss',                         'red'],

    [ 143,   0,  24,   '816',   'cherry red',                       'garnet'],
    [  97,   1,  24,   '815',   'metallic black cherry',            'garnet'],
    [  80,   2,  18,   '814',   'vin rouge?',                       'garnet'],
    [  86,   6,   30,  '902',   'vin rouge?',                       'garnet'],

    // 2 -- 28 colors
    [ 246, 112, 163,   '894',   'rose',                             'carnation'],
    [ 245,  56, 104,   '893',   'dahlia?',                          'carnation'],
    [ 245,  35,  79,   '892',   'dahlia?',                          'carnation'],
    [ 244,  17,  71,   '891',   'geranium',                         'carnation'],

    [ 247, 234, 240,   '*23',   'sakura',                           'apple blossom'],

    [ 250, 243, 231,   '819',   'layette',                          'baby pink'],
    [ 247, 211, 221,   '818',   'pearlescent powder pink',          'baby pink'],

    [ 246, 114, 170,   '957',   'bubblegum pink',                   'geranium'],
    [ 245,  45, 114,   '956',   'hot pink',                         'geranium'],

    [ 246, 115, 166,  '3708',   'azalea',                           'melon'],
    [ 245,  78, 128,  '3706',   'flamingo',                         'melon'],
    [ 246,  38,  64,  '3705',   'guava',                            'melon'],
    [ 243,  18,  44,  '3801',   'tulip red',                        'melon'],

    [ 247, 196, 217,   '963',   'candy pink',                       'dusty rose'],
    [ 245, 172, 194,   '151',   'marshmallow',                      'dusty rose'],
    [ 234, 129, 162,  '3354',   'baker miller pink',                'dusty rose'],
    [ 236,  98, 131,   '962',   'antique rose',                     'dusty rose'],
    [ 224,  94, 131,  '3733',   'pink hollyhock',                   'dusty rose'],
    [ 228,  63, 110,   '961',   'rose garden',                      'dusty rose'],
    [ 207,  48,  93,  '3731',   'pink pepper',                      'dusty rose'],
    [ 166,  22,  60,  '3350',   'dragonfruit',                      'dusty rose'],
    [ 159,   9,  39 ,  '150',   'raspberry',                        'dusty rose'],

    [ 244, 141, 178,  '3716',   'peony',                            'rose'],
    [ 245, 139, 169,  '3326',   'wild rose',                        'rose'],
    [ 234,  79, 122,   '899',   'watermelon',                       'rose'],
    [ 225,  49,  93,   '335',   'dark pink',                        'rose'],
    [ 175,   1,  39,   '326',   'rhubarb',                          'rose'],
    [ 182,  15,  45,   '309',   'crushed raspberry',                'rose'],

    // 3 -- 23 colors
    [ 246, 174, 202,  '3689',   'pale orchid',                      'mauve'],
    [ 200,  87, 130,  '3688',   'pink lupine',                      'mauve'],
    [ 175,  54,  96,  '3687',   'berry smoothie',                   'mauve'],
    [ 128,  23,  57,  '3803',   'bordeaux',                         'mauve'],
    [ 104,   8,  32,  '3685',   'metallic bramble',                 'mauve'],

    [ 245, 160, 203,   '605',   'rosebud',                          'cranberry'],
    [ 243, 128, 181,   '604',   'pink hyacinth',                    'cranberry'],
    [ 238,  89, 149,   '603',   'macaroon pink',                    'cranberry'],
    [ 227,  40, 106,   '602',   'pink verbena',                     'cranberry'],
    [ 212,  15,  80,   '601',   'impatiens',                        'cranberry'],
    [ 193,   4,  63,   '600',   'radish',                           'cranberry'],

    [ 241, 104, 161,  '3806',   'carnation',                        'cyclamen pink'],
    [ 220,  39, 108,  '3805',   'fuchsia',                          'cyclamen pink'],
    [ 211,  23,  91,  '3804',   'bengal rose',                      'cyclamen pink'],

    [ 243, 158, 213,  '3609',   'lotus blossom',                    'plum'],
    [ 241, 104, 161,  '3608',   'foxglove',                         'plum'],
    [ 195,  42, 116,  '3607',   'hibiscus',                         'plum'],
    [ 159,   7,  71,   '718',   'metallic rose magenta',            'plum'],
    [ 166,  16,  81,   '917',   'dark magenta',                     'plum'],
    [ 113,   0,  34,   '915',   'bougainvillea',                    'plum'],

    [ 140,  50, 109,   '*33',   'allium',                           'fuchsia'],
    [ 118,  12,  73,   '*34',   'tyrian',                           'fuchsia'],
    [  90,   1,  45,   '*35',   'plum',                             'fuchsia'],

    // 4 -- 25 colors
    [ 219, 148, 161,   '778',   'amethyst haze',                    'antique mauve'],
    [ 201, 129, 156,  '3727',   'lycee',                            'antique mauve'],
    [ 183,  96, 134,   '316',   'metallic heather',                 'antique mauve'],
    [ 140,  61,  79,  '3726',   'iced plum',                        'antique mauve'],
    [ 103,  37,  51,   '315',   'archil',                           'antique mauve'],
    [  95,  20,  39,  '3802',   'aubergine',                        'antique mauve'],

    [ 167, 110, 157,  '3836',   'thyme flower',                     'grape'],
    [ 120,  62, 111,  '3835',   'purple violet',                    'grape'],
    [  78,  24,  62,  '3834',   'red grape',                        'grape'],
    [  40,   4,  26,   '154',   'prune',                            'grape'],

    [ 241, 224, 239,   '*24',   'heather white',                    'lavender'],
    [ 225, 211, 234,   '*25',   'cornflower white',                 'lavender'],
    [ 195, 192, 230,   '*26',   'lavender white',                   'lavender'],
    [ 205, 184, 234,   '211',   'pearlescent light parma violet',   'lavender'],
    [ 172, 145, 217,   '210',   'parma violet',                     'lavender'],
    [ 127,  94, 171,   '209',   'lilac',                            'lavender'],
    [  96,  54, 149,   '208',   'pansy',                            'lavender'],
    [  67,  32, 119,  '3837',   'metallic purple',                  'lavender'],

    [ 231, 226, 235,   '*27',   'ash white',                        'violet'],
    [ 214, 170, 219,   '153',   'pink lilac',                       'violet'],
    [ 182, 130, 191,   '554',   'pastel purple',                    'violet'],
    [ 104,  60, 135,   '553',   'violet amethyst',                  'violet'],
    [  85,  39, 112,   '552',   'violet',                           'violet'],
    [  71,  33,  81,   '327',   'dark purple',                      'violet'],
    [  56,   7,  63,   '550',   'passionflower',                    'violet'],

    // 5 -- 23 colors
    [ 192, 178, 199,  '3743',   'rose mist',                        'antique violet'],
    [ 153, 134, 158,  '3042',   'storm clouds',                     'antique violet'],
    [ 107,  73,  95,  '3041',   'purple slate',                     'antique violet'],
    [  82,  48,  63,  '3740',   'gun metal',                        'antique violet'],

    [ 112, 100, 124,   '*28',   'lavender grey',                    'eggplant'],
    [  52,  37,  58,   '*29',   'emperor purple',                   'eggplant'],

    [ 195, 203, 226,  '3747',   'pearlescent ice blue',             'blue violet'],
    [ 141, 159, 207,   '341',   'hydrangea blue',                   'blue violet'],
    [ 117, 133, 194,   '156',   'cornflower blue',                  'blue violet'],
    [ 108, 113, 194,   '340',   'wisteria blue',                    'blue violet'],
    [ 107, 103, 190,   '155',   'metallic mauve',                   'blue violet'],
    [  72,  73, 161,  '3746',   'iris',                             'blue violet'],
    [  50,  40, 131,   '333',   'violet blue',                      'blue violet'],

    [ 118, 110, 158,   '*30',   'kitten grey',                      'blueberry'],
    [  83,  78, 125,   '*31',   'dusty violet',                     'blueberry'],
    [  55,  53,  95,   '*32',   'antique mauve',                    'blueberry'],

    [ 154, 181, 219,   '157',   'heliotrope',                       'cornflower blue'],
    [ 116, 148, 192,   '794',   'baby blue',                        'cornflower blue'],
    [  86, 106, 156,   '793',   'deep ocean',                       'cornflower blue'],
    [  61,  70, 134,  '3807',   'tanzanite',                        'cornflower blue'],
    [  43,  55, 135,   '792',   'china blue',                       'cornflower blue'],
    [  32,  38, 101,   '158',   'ultramarine blue',                 'cornflower blue'],
    [  23,  25,  93,   '791',   'lapis',                            'cornflower blue'],

    // 6 -- 21 colors
    [ 152, 185, 228,  '3840',   'linen flower blue',                'lavender blue'],
    [  95, 123, 190,  '3839',   'mediterranean blue',               'lavender blue'],
    [  69,  95, 168,  '3838',   'thistle blue',                     'lavender blue'],

    [ 146, 183, 221,   '800',   'sky blue',                         'delft blue'],
    [ 118, 155, 210,   '809',   'soft blue',                        'delft blue'],
    [  85, 125, 179,   '799',   'horizon blue',                     'delft blue'],
    [  43,  78, 147,   '798',   'cobalt blue',                      'delft blue'],

    [  28,  42, 116,   '797',   'french blue',                      'royal blue'],
    [  11,  22,  92,   '796',   's\xE9vres blue',                   'royal blue'],
    [   4,   8,  73,   '820',   'royal blue',                       'royal blue'],
    
    [ 190, 224, 234,   '162',   'blue water',                       'blue'],
    [ 155, 196, 225,   '827',   'forget-me-knot',                   'blue'],
    [ 103, 149, 193,   '813',   'gallic blue',                      'blue'],
    [  64, 106, 164,   '826',   'tuareg blue',                      'blue'],
    [  29,  63, 123,   '825',   'metallic gentian blue',            'blue'],
    [  17,  44, 100,   '824',   'marine blue',                      'blue'],

    [  66, 165, 236,   '996',   'electric blue',                    'electric blue'],
    [  26, 124, 215,  '3843',   'metallic pool blue',               'electric blue'],
    [  17, 109, 206,   '995',   'plunge pool',                      'electric blue'],

    [  69, 198, 234,  '3846',   'navajo blue',                      'bright turquoise'],
    [  37, 168, 217,  '3845',   'turquoise',                        'bright turquoise'],
    [  17, 130, 189,  '3844',   'lagoon',                           'bright turquoise'],

    // 7 -- 22 colors
    [ 158, 162, 199,   '159',   'stormy sky',                       'gray blue'],
    [ 107, 118, 160,   '160',   'stormy blue',                      'gray blue'],
    [  74,  82, 123,   '161',   'blue ash',                         'gray blue'],

    [ 240, 243, 241,  '3756',   'cloud blue',                       'baby blue'],
    [ 201, 225, 232,   '775',   'blue summer rain',                 'baby blue'],
    [ 184, 217, 230,  '3841',   'igloo blue',                       'baby blue'],
    [ 145, 188, 223,  '3325',   'arctic blue',                      'baby blue'],
    [ 121, 165, 213,  '3755',   'pastel blue',                      'baby blue'],
    [  81, 124, 174,   '334',   'light indigo',                     'baby blue'],
    [  75, 109, 162,   '322',   'delft blue',                       'baby blue'],
    [  28,  54, 103,   '312',   'midnight blue',                    'baby blue'],
    [  19,  40,  85,   '803',   'inky blue',                        'baby blue'],

    [  20,  43,  79,   '311',   'dark polar blue',                  'navy blue'],
    [  24,  32,  75,   '336',   'indigo blue',                      'navy blue'],
    [  11,   9,  44,   '823',   'blueberry',                        'navy blue'],
    [   8,   2,  25,   '939',   'elderberry blue',                  'navy blue'],

    [ 196, 217, 228,  '3753',   'moonlight blue',                   'antique blue'],
    [ 159, 184, 204,  '3752',   'light porcelain blue',             'antique blue'],
    [ 122, 145, 169,   '932',   'blue gull',                        'antique blue'],
    [  77, 102, 132,   '931',   'blue grey',                        'antique blue'],
    [  39,  56,  73,   '930',   'slate grey',                       'antique blue'],
    [  20,  38,  64,  '3750',   'dark petrol blue',                 'antique blue'],

    // 8 -- 25 colors
    [ 200, 239, 241,   '747',   'pearlescent blue sea mint',        'sky blue'],
    [ 188, 223, 230,   '828',   'sea air',                          'sky blue'],
    [ 162, 218, 230,  '3761',   'aquamarine blue',                  'sky blue'],
    [ 124, 176, 208,   '519',   'bluish spray',                     'sky blue'],

    [  72, 131, 166,   '518',   'nattier blue',                     'wedgwood'],
    [  57, 112, 159,  '3760',   'fjord blue',                       'wedgwood'],
    [  34,  79, 137,   '517',   'nautical blue',                    'wedgwood'],
    [  19,  55, 110,  '3842',   'prussian blue',                    'wedgwood'],

    [ 126, 193, 212,  '3766',   'blue green',                       'peacock blue'],
    [  79, 144, 172,   '807',   'turquoise tide',                   'peacock blue'],
    [  34,  84, 132,  '3765',   'blue teal',                        'peacock blue'],

    [ 167, 218, 222,  '3811',   'blue waterfall',                   'turquoise'],
    [ 138, 193, 200,   '598',   'pale lagoon',                      'turquoise'],
    [  88, 147, 165,   '597',   'pack ice blue',                    'turquoise'],
    [  60, 122, 142,  '3810',   'persian blue',                     'turquoise'],
    [  33,  88, 108,  '3809',   'sea cave',                         'turquoise'],
    [  19,  59,  77,  '3808',   'mallard',                          'turquoise'],

    [ 195, 206, 200,   '928',   'oyster shell',                     'gray green'],
    [ 147, 164, 157,   '927',   'oyster',                           'gray green'],
    [ 102, 122, 117,   '926',   'grey green',                       'gray green'],
    [  63,  77,  87,  '3768',   'storm',                            'gray green'],
    [  29,  48,  56,   '924',   'tahitian pearl',                   'gray green'],

    [  82, 153, 144,  '3849',   'metallic turquoise green',         'teal green'],
    [  49, 116, 107,  '3848',   'mermaid\'s tale',                  'teal green'],
    [  23,  79,  70,  '3847',   'chinese green',                    'teal green'],

    // 9 -- 26 colors
    [ 152, 230, 217,   '964',   'sea green',                        'seagreen'],
    [ 101, 196, 167,   '959',   'pale viridian',                    'seagreen'],
    [  82, 176, 145,   '958',   'green valley',                     'seagreen'],
    [  40, 142, 112,  '3812',   'viridian',                         'seagreen'],

    [  78, 178, 136,  '3851',   'emerald shard',                    'bright green'],
    [  39, 133,  84,  '3850',   'emerald',                          'bright green'],

    [ 111, 182, 156,   '993',   'peppermint',                       'aquamarine'],
    [  79, 153, 125,   '992',   'mint',                             'aquamarine'],
    [  48, 149, 108,   '943',   'acid green',                       'aquamarine'],
    [  48, 121, 100,  '3814',   'spruce',                           'aquamarine'],
    [  30,  96,  73,   '991',   'frog',                             'aquamarine'],

    [ 157, 199, 159,   '966',   'pearlescent soft green',           'baby green'],

    [ 162, 212, 166,   '564',   'light malachite',                  'jade'],
    [ 130, 187, 151,   '563',   'celedon',                          'jade'],
    [  77, 131,  88,   '562',   'malachite',                        'jade'],
    [  47,  94,  56,   '505',   'pinewood',                         'jade'],
    [  39,  79,  62,   '561',   'cypress green',                    'jade'],

    [ 146, 182, 166,  '3817',   'poplar',                           'celadon green'],
    [  97, 149, 125,  '3816',   'serpent',                          'celadon green'],
    [  66, 107,  87,   '163',   'eucalyptus',                       'celadon green'],
    [  62, 107,  79,  '3815',   'almond green',                     'celadon green'],

    [ 163, 191, 180,  '3813',   'lichen green',                     'blue green'],
    [ 118, 157, 147,   '503',   'almond leaf?',                     'blue green'],
    [  86, 116, 106,   '502',   'almond leaf?',                     'blue green'],
    [  52,  77,  69,   '501',   'pond green',                       'blue green'],
    [  15,  28,  25,   '500',   'ivy',                              'blue green'],

    // 10 -- 26 colors
    [ 178, 238, 182,   '955',   'pale green',                       'nile green'],
    [ 173, 231, 160,   '*13',   'spearmint',                        'nile green'],
    [ 136, 211, 142,   '954',   'rice field',                       'nile green'],
    [ 107, 184, 116,   '913',   'jade',                             'nile green'],

    [  81, 162,  96,   '912',   'watermint',                        'emerald green'],
    [  56, 147,  69,   '911',   'golf green',                       'emerald green'],
    [  40, 120,  48,   '910',   'english green',                    'emerald green'],
    [  22,  98,  29,   '909',   'croquet lawn',                     'emerald green'],
    [  13,  64,  22,  '3818',   'broccoli',                         'emerald green'],

    [ 188, 209, 160,   '369',   'bamboo shoot green',               'pistachio green'],
    [ 128, 158, 108,   '368',   'eau de nile',                      'pistachio green'],
    [  89, 124,  84,   '320',   'fern',                             'pistachio green'],
    [  62,  95,  58,   '367',   'laurel',                           'pistachio green'],
    [  24,  48,  28,   '319',   'shaded green',                     'pistachio green'],
    [  13,  32,  12,   '890',   'black forest',                     'pistachio green'],

    [ 165, 201, 142,   '164',   'bok choy',                         'forest green'],
    [ 112, 141,  83,   '989',   'fennel',                           'forest green'],
    [  92, 118,  65,   '988',   'verbena stem',                     'forest green'],
    [  61,  85,  45,   '987',   'basil',                            'forest green'],
    [  28,  58,  23,   '986',   'boxwood',                          'forest green'],

    [ 224, 234, 177,   '772',   'celery',                           'yellow green'],
    [ 182, 182, 109,  '3348',   'scallion',                         'yellow green'],
    [  95, 110,  52,  '3347',   'asparagus',                        'yellow green'],

    [  73,  88,  36,  '3346',   'artichoke',                        'hunter green'],
    [  34,  51,  15,  '3345',   'spinach',                          'hunter green'],
    [  30,  56,  26,   '895',   'bottle green',                     'hunter green'],

    // 11 -- 24 colors
    [ 232, 247, 164,   '*14',   'bok choy',                         'apple green'],
    [ 214, 225, 128,   '*15',   'spring onion',                     'apple green'],

    [ 193, 219,  89,   '*16',   'sprout',                           'chartreuse'],
    [ 126, 174,  55,   '704',   'lime',                             'chartreuse'],
    [ 111, 169,  63,   '703',   'metallic spring green',            'chartreuse'],

    [  78, 149,  54,   '702',   'spring lawn',                      'green'],
    [  56, 130,  43,   '701',   'grass',                            'green'],
    [  41, 116,  39,   '700',   'meadow green',                     'green'],
    [  21,  91,  27,   '699',   'metallic candied fruit',           'green'],

    [ 146, 176,  47,   '907',   'granny smith',                     'parrot green'],
    [  76, 127,  23,   '906',   'mistletoe',                        'parrot green'],
    [  63, 101,  21,   '905',   'budgie green',                     'parrot green'],
    [  46,  71,  20,   '904',   'kale',                             'parrot green'],

    [ 190, 180,  97,   '472',   'green bud',                        'avocado green'],
    [ 127, 128,  60,   '471',   'tarragon',                         'avocado green'],
    [  98, 115,  34,   '470',   'olive green',                      'avocado green'],
    [  73,  75,  29,   '469',   'golden moss green',                'avocado green'],
    [  64,  76,  23,   '937',   'moss',                             'avocado green'],
    [  54,  55,  26,   '936',   'oak moss',                         'avocado green'],
    [  42,  45,  26,   '935',   'undergrowth',                      'avocado green'],
    [  28,  29,  18,   '934',   'seaweed',                          'avocado green'],

    [ 122, 128,  79,  '3364',   'sage',                             'pine green'],
    [  90,  99,  66,  '3363',   'bullfrog',                         'pine green'],
    [  68,  78,  50,  '3362',   'conifer',                          'pine green'],

    // 12 -- 25 colors
    [ 238, 234, 192,   '*10',   'lemon sherbert',                   'tender green'],
    [ 242, 238, 123,   '*11',   'lemon drop',                       'tender green'],
    [ 226, 224,  85,   '*12',   'citrus yellow',                    'tender green'],

    [ 223, 214, 108,   '165',   'linden green',                     'moss green'],
    [ 215, 214,  83,  '3819',   'aurous green',                     'moss green'],
    [ 174, 171,  34,   '166',   'wormwood green',                   'moss green'],
    [ 110, 118,  32,   '581',   'grasshopper',                      'moss green'],
    [  79,  84,  21,   '580',   'cactus',                           'moss green'],

    [ 142, 151, 100,  '3053',   'avocado',                          'green gray'],
    [ 115, 119,  79,  '3052',   'silver green',                     'green gray'],
    [  59,  63,  28,  '3051',   'forest green',                     'green gray'],

    [ 171, 174, 140,   '524',   'pebble green',                     'fern green'],
    [ 148, 154, 122,   '523',   'green ash',                        'fern green'],
    [ 132, 140, 112,   '522',   'lattice green',                    'fern green'],
    [  54,  67,  46,   '520',   'wild wood',                        'fern green'],

    [ 183, 148,  68,   '734',   'broken olive',                     'olive green'],
    [ 152, 123,  41,   '733',   'golden green',                     'olive green'],
    [ 100,  83,  18,   '732',   'light bronzed green',              'olive green'],
    [  74,  59,  13,   '730',   'khaki',                            'olive green'],

    [ 163, 152, 100,  '3013',   'green oyster',                     'khaki green'],
    [ 118, 104,  55,  '3012',   'dried moss',                       'khaki green'],
    [  84,  72,  35,  '3011',   'deep olive',                       'khaki green'],

    [ 165, 146, 103,   '372',   'cardamom green',                   'mustard'],
    [ 145, 117,  65,   '371',   'steppe',                           'mustard'],
    [ 139, 114,  69,   '370',   'herbes de provence',               'mustard'],

    // 13 -- 20 colors
    [ 236, 200,  88,   '*17',   'maize',                            'yellow plum'],
    [ 229, 187,  70,   '*18',   'corn',                             'yellow plum'],

    [ 199, 152,  81,   '834',   'dusty sunflower',                  'golden olive'],
    [ 169, 119,  54,   '833',   'brass',                            'golden olive'],
    [ 142,  93,  34,   '832',   'modor\xE9',                        'golden olive'],
    [ 116,  78,  26,   '831',   'bronze',                           'golden olive'],
    [  89,  56,  20,   '830',   'cork oak',                         'golden olive'],
    [  96,  52,  18,   '829',   'star anise',                       'golden olive'],

    [ 191, 140, 100,   '422',   'light oak',                        'hazelnut brown'],
    [ 159, 106,  65,  '3828',   'oak',                              'hazelnut brown'],
    [ 133,  71,  41,   '420',   'hazelnut',                         'hazelnut brown'],
    [  96,  49,  24,   '869',   'coffee',                           'hazelnut brown'],

    [ 219, 201, 165,   '613',   'twine',                            'drab brown'],
    [ 167, 135,  93,   '612',   'jute',                             'drab brown'],
    [ 100,  73,  48,   '611',   'umber',                            'drab brown'],
    [ 100,  72,  37,   '610',   'beaver',                           'drab brown'],

    [ 231, 210, 158,  '3047',   'sawdust',                          'yellow beige'],
    [ 203, 163, 108,  '3046',   'biscuit',                          'yellow beige'],
    [ 158, 105,  67,  '3045',   'toffee',                           'yellow beige'],
    [ 133,  79,  47,   '167',   'praline',                          'yellow beige'],

    // 14 -- 26 colors
    [ 239, 212, 157,   '677',   'metallic sand',                    'old gold'],
    [ 227, 159, 100,   '676',   'savannah',                         'old gold'],
    [ 191, 115,  55,   '729',   'honey',                            'old gold'],
    [ 159,  93,  47,   '680',   'fennec',                           'old gold'],
    [ 151,  78,  36,  '3829',   'ochre earth',                      'old gold'],

    [ 242, 195, 108,  '3822',   'corn husk',                        'straw'],
    [ 230, 161,  71,  '3821',   'metallic mango',                   'straw'],
    [ 219, 138,  53,  '3820',   'sunshine',                         'straw'],
    [ 198, 102,  31,  '3852',   'metallic glitz',                   'straw'],

    [ 251, 245, 161,  '3078',   'buttermilk',                       'golden yellow'],

    [ 250, 238, 132,   '727',   'primrose',                         'topaz'],
    [ 248, 209,  81,   '726',   'mimosa',                           'topaz'],
    [ 245, 161,  67,   '725',   'buttercup',                        'topaz'],
    [ 239, 155,  57,   '728',   'mustard',                          'topaz'],
    [ 200,  97,  39,   '783',   'old gold',                         'topaz'],
    [ 160,  78,  24,   '782',   'wicker',                           'topaz'],
    [ 133,  47,  21,   '780',   'chestnut',                         'topaz'],

    [249, 247, 217,    '746',   'pearlescent vanilla',              'off white'],

    [ 250, 242, 202,  '3823',   'moonshine',                        'yellow'],
    [ 249, 233, 164,   '745',   'blonde',                           'yellow'],
    [ 249, 215, 123,   '744',   'grapefruit',                       'yellow'],
    [ 247, 184,  81,   '743',   'banana',                           'yellow'],

    [ 247, 191, 131,  '3855',   'desert winds',                     'autumn gold'],
    [ 247, 185, 111,   '*19',   'soft peach',                       'autumn gold'],
    [ 242, 136,  84,  '3854',   'chai spice',                       'autumn gold'],
    [ 233,  86,  43,  '3853',   'copper',                           'autumn gold'],

    // 15 -- 22 colors
    [ 236, 146,  99,  '3827',   'coral blush',                      'golden brown'],
    [ 233, 126,  81,   '977',   'caramel',                          'golden brown'],
    [ 202,  83,  44,   '976',   'nutmeg',                           'golden brown'],
    [ 160,  55,  30,  '3826',   'fox',                              'golden brown'],
    [ 106,  30,  17,   '975',   'weasel',                           'golden brown'],

    [ 251, 254, 147,   '445',   'buttered popcorn',                 'lemon'],
    [ 250, 236,  51,   '307',   'lemon',                            'lemon'],
    [ 248, 201,  27,   '444',   'bright yellow',                    'lemon'],

    [ 248, 214,  42,   '973',   'daffodil',                         'canary'],
    [ 246, 131,  36,   '972',   'curry',                            'canary'],

    [ 246, 138,  49,   '742',   'clementine',                       'tangerine'],
    [ 246, 107,  36,   '741',   'mandarin',                         'tangerine'],
    [ 245,  61,  30,   '740',   'orange papaya',                    'tangerine'],

    [ 247,  29,  29,   '947',   'sunset',                           'burnt orange'],
    [ 237,  30,  31,   '946',   'fire',                             'burnt orange'],
    [ 204,  13,  24,   '900',   'blood orange',                     'burnt orange'],

    [ 248, 193, 192,   '967',   'pearlescent tutu',                 'apricot'],
    [ 248, 157, 153,  '3824',   'strawberry chew',                  'apricot'],
    [ 247, 116, 112,  '3341',   'kitten\'s nose',                   'apricot'],
    [ 246,  76,  72,  '3340',   'hot peach',                        'apricot'],

    [ 248,  14,  31,   '608',   'poppy',                            'orange'],
    [ 245,   3,  25,   '606',   'bright red',                       'orange'],

    // 16 -- 26 colors
    [ 245, 112,  85,   '722',   'shrimp',                           'orange spice'],
    [ 240,  68,  51,   '721',   'papaya',                           'orange spice'],
    [ 222,  38,  25,   '720',   'rust',                             'orange spice'],

    [ 246, 146, 118,  '3825',   'muted apricot',                    'pumpkin'],
    [ 247,  69,  49,   '970',   'neon orange',                      'pumpkin'],

    [ 229,  82,  56,   '922',   'terracotta',                       'copper'],
    [ 205,  55,  37,   '921',   'tuscan ochre',                     'copper'],
    [ 168,  36,  27,   '920',   'sienna ochre',                     'copper'],
    [ 140,  18,  14,   '919',   'terracotta brown',                 'copper'],
    [ 128,  24,  20,   '918',   'rosewood',                         'copper'],

    [ 249, 238, 226,  '3770',   'eggshell',                         'tawny'],
    [ 243, 215, 183,   '951',   'cashmere beige',                   'tawny'],
    [ 237, 192, 159,   '945',   'champagne',                        'tawny'],

    [ 242, 179, 133,  '3856',   'buff',                             'mahogany'],
    [ 239, 123,  95,   '402',   'pottery',                          'mahogany'],
    [ 205,  80,  49,  '3776',   'nut brittle',                      'mahogany'],
    [ 160,  56,  29,   '301',   'metallic squirrel',                'mahogany'],
    [ 107,  22,  11,   '400',   'conker',                           'mahogany'],
    [  77,  17,  11,   '300',   'mahogany',                         'mahogany'],
    
    [ 244, ,202, 206,  '225',   'cherry blossom',                   'shell pink'],
    [ 227, 153, 155,   '224',   'earthworm',                        'shell pink'],
    [ 204, 118, 131,   '152',   'old pink',                         'shell pink'],
    [ 163,  66,  86,   '223',   'granite pink',                     'shell pink'],
    [ 158,  51,  64,  '3722',   'dark rosewood',                    'shell pink'],
    [ 139,  32,  42,  '3721',   'pink earth',                       'shell pink'],
    [ 116,  15,  24,   '221',   'mars red',                         'shell pink'],

    // 17 -- 23 colors
    [ 244, 216, 192,   '948',   'himalayan salt',                   'peach'],
    [ 242, 170, 142,   '754',   'beige rose',                       'peach'],
    [ 247, 191, 164,   '353',   'ballet slippers',                  'peach'],

    [ 234, 150, 114,  '3771',   'pink sand',                        'terra cotta'],
    [ 230, 134, 125,   '758',   'pink dawn',                        'terra cotta'],
    [ 202,  86,  81,  '3778',   'rose gold',                        'terra cotta'],
    [ 173,  61,  61,   '356',   'pink terracotta',                  'terra cotta'],
    [ 165,  42,  42,  '3830',   'deep blush',                       'terra cotta'],
    [ 133,  21,  24,   '355',   'red brown',                        'terra cotta'],
    [ 124,   9,  20,  '3777',   'red leather',                      'terra cotta'],

    [ 241, 160, 156,  '3779',   'burnished pink',                   'rosewood'],
    [ 184,  95,  81,  '3859',   'clay',                             'rosewood'],
    [ 115,  34,  37,  '3858',   'rose brown',                       'rosewood'],
    [  86,  20,  17,  '3857',   'oxblood',                          'rosewood'],

    [ 247, 175, 177,   '*20',   'peach',                            'shrimp'],
    
    [ 219,  80,  78,   '*21',   'prosciutto',                       'alizarin'],
    [ 171,  29,  37,   '*22',   'ruby',                             'alizarin'],

    [ 240, 198, 185,  '3774',   'linen',                            'desert sand'],
    [ 234, 190, 165,   '950',   '???',                              'desert sand'],
    [ 183, 100,  89,  '3064',   'fallow',                           'desert sand'],
    [ 178, 104,  97,   '407',   'fawn',                             'desert sand'],
    [ 138,  66,  62,  '3772',   'glazed chestnut',                  'desert sand'],
    [ 108,  41,  38,   '632',   'cocoa',                            'desert sand'],

    // 18 -- 22 colors
    [ 204, 188, 180,   '453',   'dove grey',                        'shell gray'],
    [ 167, 141, 140,   '452',   'pigeon grey',                      'shell gray'],
    [ 125,  97,  96,   '451',   'little grey',                      'shell gray'],

    [ 144, 104, 115,  '3861',   'light taupe',                      'cocoa'],
    [  97,  61,  59,  '3860',   'dark taupe',                       'cocoa'],
    [  82,  48,  45,   '779',   'sepia',                            'cocoa'],
    [  58,  37,  44,   '*09',   'pine marten',                      'cocoa'],

    [ 246, 236, 206,   '712',   'cream',                            'cream'],

    [ 242, 219, 174,   '739',   'dune',                             'tan'],
    [ 223, 173, 125,   '738',   'sahara',                           'tan'],
    [ 218, 146, 107,   '437',   'camel',                            'tan'],
    [ 181, 104,  67,   '436',   'metallic teddy',                   'tan'],

    [ 161,  81,  48,   '435',   'tobacco',                          'brown'],
    [ 119,  45,  24,   '434',   'cigar brown',                      'brown'],
    [  94,  37,  16,   '433',   'chocolate',                        'brown'],

    [  75,  30,  16,   '801',   'mink',                             'coffee brown'],
    [  59,  21,  13,   '898',   'metallic ferret',                  'coffee brown'],
    [  48,  16,  12,   '938',   'clove',                            'coffee brown'],

    [  25,  10,   7,  '3371',   'peppercorn',                       'black brown'],

    [ 194, 151, 124,  '3864',   'vicuna wool',                      'mocha beige'],
    [ 145,  96,  69,  '3863',   'otter',                            'mocha beige'],
    [ 121,  72,  48,  '3862',   'lama',                             'mocha beige'],

    // 19 -- 23 colors
    [ 252, 252, 251,  '3865',   'edelweiss',                        'winter white'],

    [ 242, 231, 202,  'ECRU',   'ecru',                             'ecru'],

    [ 230, 218, 190,   '822',   'cotton',                           'beige gray'],
    [ 201, 191, 161,   '644',   'hemp',                             'beige gray'],
    [ 136, 123,  99,   '642',   'umbra grey',                       'beige gray'],
    [ 111,  98,  76,   '640',   'grey cobblestone',                 'beige gray'],
    [ 116,  87,  64,  '3790',   'tree bark',                        'beige gray'],

    [ 227, 196, 174,   '543',   'shell',                            'beige'],

    [ 236, 226, 217,  '3866',   'garlic white',                     'mocha brown'],
    [ 219, 194, 176,  '3033',   'ashes',                            'mocha brown'],
    [ 177, 152, 129,  '3782',   'ginger',                           'mocha brown'],
    [ 131, 112,  86,  '3032',   'stone',                            'mocha brown'],
    [  66,  44,  31,  '3781',   'wrought iron',                     'mocha brown'],
    [  50,  28,  17,  '3031',   'brazil nut',                       'mocha brown'],

    [ 209, 188, 178,   '*05',   'frosted glass',                    'driftwood'],
    [ 197, 176, 163,   '*06',   'koala',                            'driftwood'],
    [ 140, 115, 101,   '*07',   'rhino',                            'driftwood'],
    [  84,  61,  48,   '*08',   'racoon',                           'driftwood'],

    [ 191, 153, 140,   '842',   'beige rope',                       'beige brown'],
    [ 158, 119, 107,   '841',   'suede',                            'beige brown'],
    [ 120,  83,  70,   '840',   'country mouse',                    'beige brown'],
    [  68,  41,  32,   '839',   'root brown',                       'beige brown'],
    [  51,  26,  21,   '838',   'dark wood',                        'beige brown'],

    // 20 -- 28 colors
    [ 214, 217, 201,  '3072',   'thunderous skies',                 'beaver gray'],
    [ 175, 166, 151,   '648',   'white pepper',                     'beaver gray'],
    [ 146, 148, 124,   '647',   'rock grey',                        'beaver gray'],
    [ 113, 108,  90,   '646',   'smoke grey',                       'beaver gray'],
    [  78,  73,  68,   '645',   'reindeer grey',                    'beaver gray'],
    [  55,  48,  42,   '844',   'black pepper',                     'beaver gray'],

    [ 204, 205, 190,  '3024',   'silver linings',                   'brown gray'],
    [ 155, 148, 126,  '3023',   'elephant',                         'brown gray'],
    [ 124, 124,  97,  '3022',   'rhino',                            'brown gray'],
    [  71,  67,  49,  '3787',   'grey wolf',                        'brown gray'],
    [  40,  32,  24,  '3021',   'ink',                              'brown gray'],

    [ 255, 255, 255, 'B5200',   'pearlescent white light',          'snow white'],

    [ 253, 253, 253, 'BLANC',   'blanc',                            'white'],

    [ 229, 230, 230,   '762',   'pearl grey',                       'pearl gray'],
    [ 175, 180, 189,   '415',   'metallic chrome',                  'pearl gray'],
    
    [ 139, 140, 159,   '318',   'granite grey',                     'steel gray'],
    [  97,  99, 113,   '414',   'lead',                             'steel gray'],

    [ 217, 217, 217,   '*01',   'rain',                             'tin'],
    [ 192, 193, 193,   '*02',   'mist',                             'tin'],
    [ 144, 145, 148,   '*03',   'dust',                             'tin'],
    [ 105, 101, 105,   '*04',   'shadow',                           'tin'],

    [  64,  63,  62,   '535',   'pebble',                           'ash gray'],

    [ 185, 193, 195,   '168',   'metallic town mouse grey',         'pewter gray'],
    [ 116, 125, 122,   '169',   'tin',                              'pewter gray'],
    [  72,  76,  85,   '317',   'metallic steel',                   'pewter gray'],
    [  51,  55,  56,   '413',   'iron',                             'pewter gray'],
    [  37,  38,  35,  '3799',   'anthracite',                       'pewter gray'],

    [   3,   3,   3,   '310',   'metallic black',                   'black']
];

// initScroll();

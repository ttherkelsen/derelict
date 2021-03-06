Lowtek.util.ns('Lowtek.data.font');

Lowtek.data.font.c64 = {
    height: 8,
    width: 8,
    colours: {
	'__UNKNOWN__': [ 255, 0, 255, 255 ],
	'.': [ 0, 0, 0, 255 ],
	'#': [ 255, 255, 255, 255 ],
    },
    glyphIndex: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	+ ' !"#$%&\'()*+,-./0123456789:;<=>?@[]',
    glyphs: {
	'__UNKNOWN__': [
	    //2345678
	    '########', // 1
	    '#......#', // 2
	    '#......#', // 3
	    '#......#', // 4
	    '#......#', // 5
	    '#......#', // 6
	    '#......#', // 7
	    '########', // 8
	],	    
	'a': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..####..', // 3
	    '.....##.', // 4
	    '..#####.', // 5
	    '.##..##.', // 6
	    '..#####.', // 7
	    '........', // 8
	],
	'b': [
	    //2345678
	    '........', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.#####..', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.#####..', // 7
	    '........', // 8
	],
	'c': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..####..', // 3
	    '.##.....', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'd': [
	    //2345678
	    '........', // 1
	    '.....##.', // 2
	    '.....##.', // 3
	    '..#####.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..#####.', // 7
	    '........', // 8
	],
	'e': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..####..', // 3
	    '.##..##.', // 4
	    '.######.', // 5
	    '.##.....', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'f': [
	    //2345678
	    '........', // 1
	    '....###.', // 2
	    '...##...', // 3
	    '..#####.', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'g': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..#####.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..#####.', // 6
	    '.....##.', // 7
	    '.#####..', // 8
	],
	'h': [
	    //2345678
	    '........', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.#####..', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'i': [
	    //2345678
	    '........', // 1
	    '...##...', // 2
	    '........', // 3
	    '..###...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'j': [
	    //2345678
	    '........', // 1
	    '.....##.', // 2
	    '........', // 3
	    '.....##.', // 4
	    '.....##.', // 5
	    '.....##.', // 6
	    '.....##.', // 7
	    '..####..', // 8
	],
	'k': [
	    //2345678
	    '........', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.##.##..', // 4
	    '.####...', // 5
	    '.##.##..', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'l': [
	    //2345678
	    '........', // 1
	    '..###...', // 2
	    '...##...', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'm': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##..##.', // 3
	    '.#######', // 4
	    '.#######', // 5
	    '.##.#.##', // 6
	    '.##...##', // 7
	    '........', // 8
	],
	'n': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.#####..', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'o': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..####..', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'p': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.#####..', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.#####..', // 6
	    '.##.....', // 7
	    '.##.....', // 8
	],
	'q': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..#####.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..#####.', // 6
	    '.....##.', // 7
	    '.....##.', // 8
	],
	'r': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.#####..', // 3
	    '.##..##.', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '.##.....', // 7
	    '........', // 8
	],
	's': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '..#####.', // 3
	    '.##.....', // 4
	    '..####..', // 5
	    '.....##.', // 6
	    '.#####..', // 7
	    '........', // 8
	],
	't': [
	    //2345678
	    '........', // 1
	    '...##...', // 2
	    '.######.', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '....###.', // 7
	    '........', // 8
	],
	'u': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..#####.', // 7
	    '........', // 8
	],
	'v': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..####..', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'w': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##...##', // 3
	    '.##.#.##', // 4
	    '.#######', // 5
	    '..##.##.', // 6
	    '..##.##.', // 7
	    '........', // 8
	],
	'x': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##..##.', // 3
	    '..####..', // 4
	    '...##...', // 5
	    '..####..', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'y': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..#####.', // 6
	    '....##..', // 7
	    '.####...', // 8
	],
	'z': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.######.', // 3
	    '....##..', // 4
	    '...##...', // 5
	    '..##....', // 6
	    '.######.', // 7
	    '........', // 8
	],
	'A': [
	    //2345678
	    '...##...', // 1
	    '..####..', // 2
	    '.##..##.', // 3
	    '.######.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'B': [
	    //2345678
	    '.#####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.#####..', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.#####..', // 7
	    '........', // 8
	],
	'C': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.....', // 3
	    '.##.....', // 4
	    '.##.....', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'D': [
	    //2345678
	    '........', // 1
	    '.....##.', // 2
	    '.....##.', // 3
	    '..#####.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..#####.', // 7
	    '........', // 8
	],
	'E': [
	    //2345678
	    '.######.', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.####...', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '.######.', // 7
	    '........', // 8
	],
	'F': [
	    //2345678
	    '.######.', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.####...', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '.##.....', // 7
	    '........', // 8
	],
	'G': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.....', // 3
	    '.######.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'H': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.######.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'I': [
	    //2345678
	    '..####..', // 1
	    '...##...', // 2
	    '...##...', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'J': [
	    //2345678
	    '...####.', // 1
	    '....##..', // 2
	    '....##..', // 3
	    '....##..', // 4
	    '....##..', // 5
	    '.##.##..', // 6
	    '..###...', // 7
	    '........', // 8
	],
	'K': [
	    //2345678
	    '.##..##.', // 1
	    '.##.##..', // 2
	    '.####...', // 3
	    '.###....', // 4
	    '.####...', // 5
	    '.##.##..', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'L': [
	    //2345678
	    '.##.....', // 1
	    '.##.....', // 2
	    '.##.....', // 3
	    '.##.....', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '.######.', // 7
	    '........', // 8
	],
	'M': [
	    //2345678
	    '.##...##', // 1
	    '.###.###', // 2
	    '.#######', // 3
	    '.##.#.##', // 4
	    '.##...##', // 5
	    '.##...##', // 6
	    '.##...##', // 7
	    '........', // 8
	],
	'N': [
	    //2345678
	    '.##..##.', // 1
	    '.###.##.', // 2
	    '.######.', // 3
	    '.######.', // 4
	    '.##.###.', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'O': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'P': [
	    //2345678
	    '.#####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.#####..', // 4
	    '.##.....', // 5
	    '.##.....', // 6
	    '.##.....', // 7
	    '........', // 8
	],
	'Q': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..####..', // 6
	    '....###.', // 7
	    '........', // 8
	],
	'R': [
	    //2345678
	    '.#####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.#####..', // 4
	    '.####...', // 5
	    '.##.##..', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'S': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.....', // 3
	    '..####..', // 4
	    '.....##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'T': [
	    //2345678
	    '.######.', // 1
	    '...##...', // 2
	    '...##...', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'U': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'V': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '.##..##.', // 4
	    '.##..##.', // 5
	    '..####..', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'W': [
	    //2345678
	    '.##...##', // 1
	    '.##...##', // 2
	    '.##...##', // 3
	    '.##.#.##', // 4
	    '.#######', // 5
	    '.###.###', // 6
	    '.##...##', // 7
	    '........', // 8
	],
	'X': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '..####..', // 3
	    '...##...', // 4
	    '..####..', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'Y': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '..####..', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'Z': [
	    //2345678
	    '.######.', // 1
	    '.....##.', // 2
	    '....##..', // 3
	    '...##...', // 4
	    '..##....', // 5
	    '.##.....', // 6
	    '.######.', // 7
	    '........', // 8
	],
	' ': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '........', // 3
	    '........', // 4
	    '........', // 5
	    '........', // 6
	    '........', // 7
	    '........', // 8
	],
	'!': [
	    //2345678
	    '...##...', // 1
	    '...##...', // 2
	    '...##...', // 3
	    '...##...', // 4
	    '........', // 5
	    '........', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'"': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '........', // 4
	    '........', // 5
	    '........', // 6
	    '........', // 7
	    '........', // 8
	],
	'#': [
	    //2345678
	    '.##..##.', // 1
	    '.##..##.', // 2
	    '########', // 3
	    '.##..##.', // 4
	    '########', // 5
	    '.##..##.', // 6
	    '.##..##.', // 7
	    '........', // 8
	],
	'$': [
	    //2345678
	    '...##...', // 1
	    '..#####.', // 2
	    '.##.....', // 3
	    '..####..', // 4
	    '.....##.', // 5
	    '.#####..', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'%': [
	    //2345678
	    '.##...#.', // 1
	    '.##..##.', // 2
	    '....##..', // 3
	    '...##...', // 4
	    '..##....', // 5
	    '.##..##.', // 6
	    '.#...##.', // 7
	    '........', // 8
	],
	'&': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '..####..', // 3
	    '..###...', // 4
	    '.##..###', // 5
	    '.##..##.', // 6
	    '..######', // 7
	    '........', // 8
	],
	"'": [
	    //2345678
	    '.....##.', // 1
	    '....##..', // 2
	    '...##...', // 3
	    '........', // 4
	    '........', // 5
	    '........', // 6
	    '........', // 7
	    '........', // 8
	],
	'(': [
	    //2345678
	    '....##..', // 1
	    '...##...', // 2
	    '..##....', // 3
	    '..##....', // 4
	    '..##....', // 5
	    '...##...', // 6
	    '....##..', // 7
	    '........', // 8
	],
	')': [
	    //2345678
	    '..##....', // 1
	    '...##...', // 2
	    '....##..', // 3
	    '....##..', // 4
	    '....##..', // 5
	    '...##...', // 6
	    '..##....', // 7
	    '........', // 8
	],
	'*': [
	    //2345678
	    '........', // 1
	    '.##..##.', // 2
	    '..####..', // 3
	    '########', // 4
	    '..####..', // 5
	    '.##..##.', // 6
	    '........', // 7
	    '........', // 8
	],
	'+': [
	    //2345678
	    '........', // 1
	    '...##...', // 2
	    '...##...', // 3
	    '.######.', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '........', // 7
	    '........', // 8
	],
	',': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '........', // 3
	    '........', // 4
	    '........', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '..##....', // 8
	],
	'-': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '........', // 3
	    '.######.', // 4
	    '........', // 5
	    '........', // 6
	    '........', // 7
	    '........', // 8
	],
	'.': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '........', // 3
	    '........', // 4
	    '........', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'/': [
	    //2345678
	    '........', // 1
	    '......##', // 2
	    '.....##.', // 3
	    '....##..', // 4
	    '...##...', // 5
	    '..##....', // 6
	    '.##.....', // 7
	    '........', // 8
	],
	'0': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.###.', // 3
	    '.###.##.', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'1': [
	    //2345678
	    '...##...', // 1
	    '...##...', // 2
	    '..###...', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '.######.', // 7
	    '........', // 8
	],
	'2': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.....##.', // 3
	    '....##..', // 4
	    '..##....', // 5
	    '.##.....', // 6
	    '.######.', // 7
	    '........', // 8
	],
	'3': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.....##.', // 3
	    '...###..', // 4
	    '.....##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'4': [
	    //2345678
	    '.....##.', // 1
	    '....###.', // 2
	    '...####.', // 3
	    '.##..##.', // 4
	    '.#######', // 5
	    '.....##.', // 6
	    '.....##.', // 7
	    '........', // 8
	],
	'5': [
	    //2345678
	    '.######.', // 1
	    '.##.....', // 2
	    '.#####..', // 3
	    '.....##.', // 4
	    '.....##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'6': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.....', // 3
	    '.#####..', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'7': [
	    //2345678
	    '.######.', // 1
	    '.##..##.', // 2
	    '....##..', // 3
	    '...##...', // 4
	    '...##...', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'8': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '..####..', // 4
	    '.##..##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'9': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##..##.', // 3
	    '..#####.', // 4
	    '.....##.', // 5
	    '.##..##.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	':': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '...##...', // 3
	    '........', // 4
	    '........', // 5
	    '...##...', // 6
	    '........', // 7
	    '........', // 8
	],
	';': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '...##...', // 3
	    '........', // 4
	    '........', // 5
	    '...##...', // 6
	    '...##...', // 7
	    '..##....', // 8
	],
	'<': [
	    //2345678
	    '....###.', // 1
	    '...##...', // 2
	    '..##....', // 3
	    '.##.....', // 4
	    '..##....', // 5
	    '...##...', // 6
	    '....###.', // 7
	    '........', // 8
	],
	'=': [
	    //2345678
	    '........', // 1
	    '........', // 2
	    '.######.', // 3
	    '........', // 4
	    '.######.', // 5
	    '........', // 6
	    '........', // 7
	    '........', // 8
	],
	'>': [
	    //2345678
	    '.###....', // 1
	    '...##...', // 2
	    '....##..', // 3
	    '.....##.', // 4
	    '....##..', // 5
	    '...##...', // 6
	    '.###....', // 7
	    '........', // 8
	],
	'?': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.....##.', // 3
	    '....##..', // 4
	    '...##...', // 5
	    '........', // 6
	    '...##...', // 7
	    '........', // 8
	],
	'@': [
	    //2345678
	    '..####..', // 1
	    '.##..##.', // 2
	    '.##.###.', // 3
	    '.##.###.', // 4
	    '.##.....', // 5
	    '.##...#.', // 6
	    '..####..', // 7
	    '........', // 8
	],
	'[': [
	    //2345678
	    '..####..', // 1
	    '..##....', // 2
	    '..##....', // 3
	    '..##....', // 4
	    '..##....', // 5
	    '..##....', // 6
	    '..####..', // 7
	    '........', // 8
	],
	']': [
	    //2345678
	    '..####..', // 1
	    '....##..', // 2
	    '....##..', // 3
	    '....##..', // 4
	    '....##..', // 5
	    '....##..', // 6
	    '..####..', // 7
	    '........', // 8
	],
    },
};

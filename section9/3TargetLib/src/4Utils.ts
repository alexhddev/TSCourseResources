
// @ts-ignore
const lessZzzs = 'zzz z z zz  zToo many zz??'.replaceAll('z', '')

// @ts-ignore
const fourth = [0, 1, 2, 3, 4, 5].at(4)

// Top level await: 
// requires target:ES2022
// requires module: esnext
const language = 'EN'
// @ts-ignore
const languagePack = await import(`./messages-${language}.mjs`);

export { }
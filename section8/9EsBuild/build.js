const { build } = require("esbuild");

async function buildAll(){
    await build({
        entryPoints:['./src/Main.ts'],
        bundle: true,
        platform: 'browser',
        logLevel: 'info',
        outfile: 'dist/bundle-web.js'
    });
    
    await build({
        entryPoints:['./src/Main.ts'],
        bundle: true,
        platform: 'node',
        logLevel: 'info',
        outfile: 'dist/bundle-node.js'
    });
}

buildAll();

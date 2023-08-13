import { html } from "@elysiajs/html";
// import { FileSystemRouter } from "bun";
import Elysia from "elysia";
import { Main } from "./layouts/main";
import * as elements from 'typed-html'

import { copyFile, existsSync, rmSync, statSync } from "fs";
import * as path from 'path';

const PROJECT_ROOT = import.meta.dir;
// const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve( PROJECT_ROOT, "dist" );
const buildExist = existsSync( BUILD_DIR )

const { routes: router } = new Bun.FileSystemRouter( {
    style: 'nextjs',
    dir: './src/pages'
} );

if (!(await Bun.file( './src/utils/router.ts' ).exists()))
{
      const routeExporter = `export const router = [${[...Object.keys( router ).map( route => `"${ route }"` )]}] as const\nexport type Router = typeof router[number]`
      await Bun.write( './src/utils/router.ts', routeExporter );
    }
    
    let entry = [ ...Object.values( router ), './src/index.tsx' ]
    if (!buildExist)
    {
        const build = await Bun.build( {
            entrypoints: entry ? entry : [ './src/index.tsx' ],
            outdir: BUILD_DIR,
            minify: true,
            splitting: true,
            // plugins: [dts()]
          } );

    }
    //   rmSync( BUILD_DIR, { recursive: true } );
// const build = await Bun.build( {
//   entrypoints: entry ? entry : [ './src/index.tsx' ],
//   outdir: BUILD_DIR,
//   minify: true,
//   splitting: true,
//   // plugins: [dts()]
// } );

const buildRouter = new Bun.FileSystemRouter( {
  style: 'nextjs',
  dir: BUILD_DIR + '/src/pages'
} ).routes;

const fsRouter = async () =>
{
    const app = new Elysia().use(html())
    const publicDir = import.meta.dir + '/public';
    app.get( "/styles.css", () => Bun.file( publicDir + "/styles.css" ) );
    app.get( '/index.js', () => Bun.file( publicDir + '/index.js' ) )
    for await(const [route, path] of Object.entries(router)) {
        const importPage = await import(path)
        let Page = importPage.default
        const isAsync = Page.toString().includes('async')
        const renderedPage = isAsync ? await Page() : <Page />;
        // @ts-ignore html is there
        app.get( route, ( { html } ) => html( renderedPage ) )
    }
    return app
}

const app = new Elysia()
// @ts-ignore
.use(html())
.use(await fsRouter())
.listen(3333)

console.log('listing on http://localhost:' +  app.server?.port)
export type App = typeof app








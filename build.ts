import { BunPlugin } from 'bun';
import dts from 'bun-plugin-dts';
import { copyFile, existsSync, rmSync, statSync } from "fs";
import * as path from 'path';

const PROJECT_ROOT = import.meta.dir;
// const PUBLIC_DIR = path.resolve(PROJECT_ROOT, "public");
const BUILD_DIR = path.resolve( PROJECT_ROOT, "dist" );

if ( existsSync( BUILD_DIR ) )
  rmSync( BUILD_DIR, { recursive: true } );

export const { routes: router } = new Bun.FileSystemRouter( {
  style: 'nextjs',
  dir: './src/pages'
} );

if (!(await Bun.file( './src/router.ts' ).exists()))
{
  const routeExporter = `export const router = [${[...Object.keys( router ).map( route => `"${ route }"` )]}] as const\nexport type Router = typeof router[number]`
  await Bun.write( './src/router.ts', routeExporter );
}

let entry = [ ...Object.values( router ), './src/index.tsx' ]
const build = await Bun.build( {
  entrypoints: entry ? entry : [ './src/index.tsx' ],
  outdir: BUILD_DIR,
  minify: true,
  splitting: true,
  // plugins: [dts()]
} );

export const buildRouter = new Bun.FileSystemRouter( {
  style: 'nextjs',
  dir: BUILD_DIR + '/src/pages'
} ).routes;

console.log(buildRouter);






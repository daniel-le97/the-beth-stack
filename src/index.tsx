import html from "@elysiajs/html";
// import { FileSystemRouter } from "bun";
import Elysia from "elysia";
import { Main } from "./layouts/main";
import * as elements from 'typed-html'
// import { routerKeys } from "./router";
import { inline, install } from '@twind/core'

import { Router } from "./router";
import { buildRouter } from "../build";

// impot 
// const twinder = install(config)



// export const { routes: router } = new Bun.FileSystemRouter({
//     style: 'nextjs',
//     dir: './src/pages'
// })

// const routerExporter = `export type Router = ${Object.keys(router).map( route => `"${route}"`).join(" | ")}`
// await Bun.write('./src/router.ts', routerExporter);



// const routerCode = JSON.stringify(router, null, 2); // Convert router object to a formatted JSON string

// const code = `
// export const routerKeys = ${routerCode};

// // export type Router = keyof typeof router;


// `;



// export type Router = keyof typeof routerKeys;

const fsRouter = async() => {

    // app.use(html())
    // @ts-ignore
    const app = new Elysia().use(html())
    app.get("/styles.css", () => Bun.file( import.meta.dir + "/public/styles.css"))
    app.get('/index.js', () => Bun.file( import.meta.dir + '/public/index.js'))
    app.get('/twind.js', () => Bun.file( import.meta.dir + '/public/twind.js'))
    // const { routes } = new Bun.FileSystemRouter({
    //     style: 'nextjs',
    //     dir: './src/pages'
    // })
    // const mainHtml = (await Bun.file( import.meta.dir + '/public/index.html').text())
    for await(const [route, path] of Object.entries(buildRouter)) {
        const importPage = await import(path)
        let Page = importPage.default
        const isAsync = Page.toString().includes('async')
        const renderedPage = isAsync ? await Page() : <Page />;

        // const styledPage = inline(renderedPage, twinder)
        // console.log({styledPage, renderedPage});
        
        // @ts-ignore
        app.get(route, ({html}) => html(renderedPage))

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








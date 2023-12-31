import * as elements from "typed-html";

// this is what we will be passing pages/index.tsx into
export const Main = ({children}: elements.Children) => /*html*/`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>htmx + bun</title>
        <script src="/index.js"></script>
        <link href="/styles.css" rel="stylesheet">
        </head>
        <body>
        ${children}
        </body>
        </html>
        `;
        
        // <script src="https://cdn.twind.style" crossorigin></script>
{/* <script src="https://unpkg.com/htmx.org@1.9.3"></script> */}
{/* <script src="https://unpkg.com/hyperscript.org@0.9.9"></script> */}
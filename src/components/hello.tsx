import * as elements from "typed-html"
import { db } from "../db";
import { todos } from "../db/schema";
export default async({children}: elements.Children) => {
    // console.log('server component')
    // const data = await db.select().from(todos).all();
    return (
        <div>
            {children}
            {/* <div>{data.map(dat => <div>{dat.content}</div>)}</div> */}
        </div>
    )
}
// const Heller = await Hello()
// export default Heller
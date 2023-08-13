import * as elements from "typed-html";
import { TodoForm, TodoList } from "../components/Todos";

import { db } from "../db";
import { todos as Todos } from "../db/schema";
import hello from "../components/hello";
import { Main } from "../layouts/main";
// import { Router } from "..";
// import { Router } from "..";



// export const SERVER = async() => {
//     const todos = await db.select().from(Todos).all();
//     // const Todo = () => <TodoList todos={todos}/>
//     return todos
// }
export default async () =>
{

    // const server = console.log(<Hello/>)
    // const todos = await db.select().from( Todos ).all();
    // const Todo = () => <TodoList todos={ todos } />;

    // const divs = () => <div>rendering hello</div>
    // const renderHello = await hello(HelloRenderer())
    // console.log(renderHello);

    // 
    // const Heller = (await Hello())
    // console.log( Router );

    return (
        <Main>
            <div class="bg-gray-100">
                <div>
                    {/* <TodoList todos={ todos } /> */ }
                </div>
                <header class="bg-blue-500 py-4">
                    <div class="container mx-auto text-white text-center">
                        <h1 class="text-3xl font-semibold">Welcome to My Website</h1>
                        <p class="mt-2">Discover amazing content and more.</p>
                    </div>
                </header>
                <div class="container mx-auto mt-8 px-4">
                    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="bg-white rounded-lg p-4 shadow-md">
                            <h2 class="text-xl font-semibold mb-2">Featured Article</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula non justo ac consequat.</p>
                        </div>
                        <div class="bg-white rounded-lg p-4 shadow-md">
                            <h2 class="text-xl font-semibold mb-2">Latest News</h2>
                            <p>Stay updated with the latest news and events in our industry.</p>
                        </div>
                        <div class="bg-white rounded-lg p-4 shadow-md">
                            <h2 class="text-xl font-semibold mb-2">Upcoming Events</h2>
                            <p>Join us for exciting upcoming events and workshops.</p>
                        </div>
                    </section>
                </div>
                <footer class="bg-gray-300 py-4">
                    <div class="container mx-auto text-center">
                        <p>&copy; 2023 My Website. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Main>
    );
};

const HelloRenderer = () =>
{
    return ( <div>rendering heller</div> );
}


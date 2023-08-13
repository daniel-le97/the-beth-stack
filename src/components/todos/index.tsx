import { Context } from "elysia";
import { App } from "../..";
import { db } from "../../db";
import { Todo, todos } from "../../db/schema";
import * as elements from 'typed-html'
type _Context = Context & {
  html: (value: string) => Response
}
const GET = async(ctx: _Context) => {
    const data = await db.select().from(todos).all();
    return ctx.html(<TodoList todos={data} />);
}


function TodoItem({ content, completed, id }: Todo) {
    return (
      <div class="flex flex-row space-x-3">
        <p>{content}</p>
        <input
          type="checkbox"
          checked={completed}
          hx-post={`/todos/toggle/${id}`}
          hx-swap="outerHTML"
          hx-target="closest div"
        />
        <button
          class="text-red-500"
          hx-delete={`/todos/${id}`}
          hx-swap="outerHTML"
          hx-target="closest div"
        >
          X
        </button>
      </div>
    );
  }
  
  function TodoList({ todos }: { todos: Todo[] }) {
    return (
      <div>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
        <TodoForm />
      </div>
    );
  }
  
  function TodoForm() {
    return (
      <form
        class="flex flex-row space-x-3"
        hx-post="/todos"
        hx-swap="beforebegin"
        _="on submit target.reset()"
      >
        <input type="text" name="content" class="border border-black" />
        <button type="submit">Add</button>
      </form>
    );
  }
  
import * as elements from "typed-html";
import { Main } from "../layouts/main";
export default () =>
{
    return (
        <Main>
            <div class="bg-gray-100">
                <header class="bg-blue-500 py-4">
                    <div class="container mx-auto text-white text-center">
                        <h1 class="text-3xl font-semibold">Welcome to My Website</h1>
                        <p class="mt-2">Discover amazing content and more.</p>
                    </div>
                </header>
                <div class="container mx-auto mt-8 px-4">
                    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
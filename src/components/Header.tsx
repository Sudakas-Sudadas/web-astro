import { Component, createSignal } from "solid-js";
import Icon from './Icon';

import logoPoto from '../assets/poto-logo-circulo.png';
import Spotify from "./Spotify";

const Header: Component<{}> = (props) => {
    const [open, setOpen] = createSignal(false);

    return <header class="sticky top-0 z-10">
        <button
            class="p-4 w-full flex justify-center items-center bg-black text-white space-x-2 uppercase xl:hidden"
            onClick={() => setOpen(!open())}
        >
            <Icon name="menu" />

            <span>Menú</span>
        </button>

        <div
            class="fixed xl:static top-0 w-full h-full xl:h-auto flex flex-col bg-white transition-transform xl:transition-none shadow-xl xl:shadow-none"
            classList={{ "-translate-x-full xl:translate-x-0": !open() }}
        >
            <button
                class="p-4 flex justify-end items-center space-x-2 bg-black text-white text-end uppercase xl:hidden"
                onClick={() => setOpen(false)}
            >
                <Icon name="x" />

                <span>Cerrar</span>
            </button>

            <nav class="py-8 xl:py-2 uppercase xl:bg-black text-black xl:text-white">
                <ul class="container mx-auto px-4 xl:w-3/4 2xl:w-3/5 space-y-6 xl:space-y-0 xl:flex items-center justify-between">
                    <li>
                        <a href="/">
                            <img src={logoPoto.src} alt="Imagotipo Sudakas Sudadas" class="ml-auto h-16" />
                        </a>
                    </li>
                    <li>
                        <a href="/somos" class="hover:text-rosa-300 transition-colors duration-200">
                            Quiénes somos
                        </a>
                    </li>
                    <li>
                        <a href="/bailamos" class="hover:text-rosa-300 transition-colors duration-200">
                            Bailamos
                        </a>
                    </li>
                    <li>
                        <a href="/practicas" class="hover:text-rosa-300 transition-colors duration-200">
                            Compartimos prácticas
                        </a>
                    </li>
                    <li>
                        <a href="/reflexionamos" class="hover:text-rosa-300 transition-colors duration-200">
                            Reflexionamos
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="mt-auto p-4 flex justify-between items-center xl:hidden">
                <a href='mailto:sudakassudadas@gmail.com' class='text-bold'>
                    sudakassudadas@gmail.com
                </a>

                <div id='rrss' class='flex items-center space-x-2 text-bold'>
                    <a href='https://www.instagram.com/sudakassudadas'>
                        <Icon name='instagram' class='w-8 h-8' />
                    </a>

                    <a
                        href='https://open.spotify.com/show/0LiK4UQxhwI3s0c2FhNPjO?si=QBpDx9mGTA-luUkoOY3G5A'
                        class='w-8 h-8'
                    >
                        <Spotify />
                    </a>
                </div>
            </div>
        </div>
    </header>;
};

export default Header;

import { Component, createSignal } from "solid-js";
import Icon from './Icon';

const Header: Component<{}> = (props) => {
    const [open, setOpen] = createSignal(false);

    return <header>
        <button
            class="p-4 w-full flex justify-center items-center space-x-2 uppercase lg:hidden"
            onClick={() => setOpen(!open())}
        >
            <Icon name="menu" />

            <span>Menú</span>
        </button>

        <div
            class="absolute lg:static top-0 w-3/4 lg:w-full h-full lg:h-auto flex flex-col bg-white transition-transform lg:transition-none z-10 shadow-xl lg:shadow-none"
            classList={{ "-translate-x-full lg:translate-x-0": !open() }}
        >
            <button
                class="p-4 flex justify-end items-center space-x-2 bg-black text-white text-end uppercase lg:hidden"
                onClick={() => setOpen(false)}
            >
                <Icon name="x" />

                <span>Cerrar</span>
            </button>

            <nav class="lg:container lg:mx-auto py-8 lg:py-4 px-4 uppercase">
                <ul class="lg:w-4/5 xl:w-3/4 2xl:w-3/5 lg:mx-auto space-y-3 lg:space-y-0 lg:flex justify-between">
                    <li>
                        <a href="">
                            Quiénes somos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Bailamos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Compartimos prácticas
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Reflexionamos
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
};

export default Header;
import { Component, mergeProps } from "solid-js";

import iconUrl from '../assets/feather-sprite.svg';

const Icon: Component<{ name: string, size?: number, color?: string, class?: string }> = (props) => {
    props = mergeProps({
        size: 24,
        color: "currentColor",
    }, props);

    return <svg
        width={props.size}
        height={props.size}
        fill="none"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class={props.class}
    >
        <use href={`${iconUrl}#${props.name}`} />
    </svg>;
};

export default Icon;
import type { Component } from "solid-js";
import { mergeProps } from "solid-js";

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
        <use href={`/feather-sprite.svg#${props.name}`} />
    </svg>;
};

export default Icon;

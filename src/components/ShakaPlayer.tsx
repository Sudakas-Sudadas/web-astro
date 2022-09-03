import { Component, onMount } from "solid-js";
import '../utils/shaka-player.compiled';

const ShakaPlayer: Component<{ uri: string, poster: string, class?: string }> = (props) => {
    let video: HTMLVideoElement;

    onMount(() => {
        // Install built-in polyfills to patch browser incompatibilities.
        shaka.polyfill.installAll();

        // Check to see if the browser supports the basic APIs Shaka needs.
        if (shaka.Player.isBrowserSupported()) {
            // Everything looks good!
            initPlayer();
        } else {
            // This browser does not have the minimum set of APIs we need.
            console.error('Browser not supported!');
        }
    });

    async function initPlayer() {
        // Create a Player instance.
        const player = new shaka.Player(video);

        // Listen for error events.
        player.addEventListener('error', onErrorEvent);

        // Try to load a manifest.
        // This is an asynchronous process.
        try {
            await player.load(props.uri);
            // This runs if the asynchronous load is successful.
            console.log('The video has now been loaded!');
        } catch (e: any) {
            // onError is executed if the asynchronous load fails.
            onError(e);
        }
    }

    function onErrorEvent(event: Event) {
        // Extract the shaka.util.Error object from the event.
        onError((event as CustomEvent).detail);
    }

    function onError(error: shaka.util.Error) {
        // Log the error.
        console.error('Error code', error.code, 'object', error);
    }

    return <video
        ref={video!}
        class={props.class}
        poster={props.poster}
        autoplay
        muted={true}
        loop></video>;
};

export default ShakaPlayer;
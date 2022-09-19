import {
    storyblokInit,
    apiPlugin,
    storyblokEditable,
    loadStoryblokBridge,
} from '@storyblok/js';

const dev = import.meta.env.DEV;
const storyblokToken = import.meta.env.STORYBLOK_TOKEN;

const { storyblokApi } = storyblokInit({
    bridge: false,
    accessToken: storyblokToken,
    apiOptions: {
        cache: { type: 'memory' },
        region: 'us'
    },
    use: [apiPlugin],
});

export async function getLinks(folder) {
    const { data } = await storyblokApi.get('cdn/links', {
        version: 'draft',
        starts_with: folder,
    });

    const links = data ? data.links : null;

    return links;
}

export async function getStory(slug) {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
        version: 'draft',
    });

    const story = data ? data.story : null;

    return story;
}

export async function getStories(folder) {
    const { data } = await storyblokApi.get('cdn/stories', {
        version: 'draft',
        starts_with: folder,
        sort_by: 'created_at:asc'
    });

    const stories = data ? data.stories : null;

    return stories;
}

export async function getEditableAttributes(blok) {
    if (!blok || !dev) return false;

    return storyblokEditable(blok);
}

export async function activateStoryblokBridge() {
    if (!dev) return false;

    return loadStoryblokBridge().then(() => {
        const { StoryblokBridge, location } = window;
        const storyblokInstance = new StoryblokBridge();

        storyblokInstance.on(['published', 'change'], () => {
            location.reload(true);
        });
    });
}

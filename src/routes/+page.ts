// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const dog = await res.json();

    return { dog };
}) satisfies PageLoad;
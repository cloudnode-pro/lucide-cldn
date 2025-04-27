import {Icon} from "../Icon.js";

export class Shovel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V17L7 12 12 17 7 22zM9.5 14.5 16 8M17 2 22 7 21.5 7.5A3.5 3.5 0 0 1 16.5 7.5S16.5 7.5 16.5 7.5A3.5 3.5 0 0 1 16.5 2.5z"/></svg>`
        ).node);
    }
}

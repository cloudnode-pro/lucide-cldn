import {Icon} from "../Icon.js";

export class RectangleGoggles extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6A2 2 0 0 1 22 8V16A2 2 0 0 1 20 18H16A2 2 0 0 1 14.4 17.2L12.8 15.1A1 1 0 0 0 11.2 15L9.6 17.2A2 2 0 0 1 8 18H4A2 2 0 0 1 2 16V8A2 2 0 0 1 4 6z"/></svg>`
        ).node);
    }
}

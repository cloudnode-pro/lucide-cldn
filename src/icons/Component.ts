import {Icon} from "../Icon.js";

export class Component extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 11.3A1 1 0 0 0 15.5 12.7L18 15.1A1 1 0 0 0 19.3 15L21.7 12.7A1 1 0 0 0 21.7 11.3L19.3 8.9A1 1 0 0 0 18 9zM2.3 11.3A1 1 0 0 0 2.3 12.7L4.7 15.1A1 1 0 0 0 6 15L8.5 12.7A1 1 0 0 0 8.5 11.3L6 8.9A1 1 0 0 0 4.7 9zM9 18A1 1 0 0 0 9 19.2L11.2 21.7A1 1 0 0 0 12.7 21.7L15.1 19.3A1 1 0 0 0 15 18L12.7 15.5A1 1 0 0 0 11.3 15.5zM9 4.7A1 1 0 0 0 9 6L11.2 8.5A1 1 0 0 0 12.7 8.5L15.1 6A1 1 0 0 0 15 4.7L12.7 2.3A1 1 0 0 0 11.3 2.3z"/></svg>`
        ).node);
    }
}

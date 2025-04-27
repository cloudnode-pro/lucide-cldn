import {Icon} from "../Icon.js";

export class LampWallDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 18.6A1 1 0 0 1 19 20H9A1 1 0 0 1 8 18.6L10 13.6A1 1 0 0 1 11 13H17A1 1 0 0 1 18 13.6zM6 3A2 2 0 0 1 8 5V7A2 2 0 0 1 6 9H5A1 1 0 0 1 4 8V4A1 1 0 0 1 5 3z"/><path d="M8 6H12A2 2 0 0 1 14 8V13"/></svg>`
        ).node);
    }
}

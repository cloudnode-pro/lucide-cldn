import {Icon} from "../Icon.js";

export class BrickWallFire extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3V5.1M17 9C18 12 19.5 12.5 20.5 13.5A5 5 0 0 1 22 17 5 5 0 0 1 12 17L12.1 16.1A2 2 0 1 0 15.4 14.1C13 11.5 16 9 17 9"/><path d="M21 8.3V5A2 2 0 0 0 19 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H9M3 15H8.3M3 9H11.2M8 15V21M8 3V9"/></svg>`
        ).node);
    }
}

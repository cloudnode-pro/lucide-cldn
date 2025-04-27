import {Icon} from "../Icon.js";

export class BrickWall extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 9V15M16 15V21M16 3V9M3 15H21M3 9H21M8 15V21M8 3V9"/></svg>`
        ).node);
    }
}

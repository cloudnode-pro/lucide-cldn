import {Icon} from "../Icon.js";

export class Wallpaper extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="9" r="2"/><path d="M9 17 15.1 10.9A2 2 0 0 1 17.9 10.9L22 15V5A2 2 0 0 0 20 3H4A2 2 0 0 0 2 5V15A2 2 0 0 0 4 17H20A2 2 0 0 0 22 15M8 21H16M12 17V21"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Palette extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22A1 1 0 0 1 12 2 10 9 0 0 1 22 11 5 5 0 0 1 17 16H14.8A1.8 1.8 0 0 0 13.3 18.8L13.7 19.2A1.8 1.8 0 0 1 12.4 22z"/><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor"/><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor"/><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor"/><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}

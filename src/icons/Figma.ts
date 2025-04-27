import {Icon} from "../Icon.js";

export class Figma extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12V9H8.5A3.5 3.5 0 0 1 5 5.5M12 2H15.5A3.5 3.5 0 1 1 15.5 9H12z"/><path d="M12 12.5A3.5 3.5 0 1 1 19 12.5 3.5 3.5 0 1 1 12 12.5M5 19.5A3.5 3.5 0 0 1 8.5 16H12V19.5A3.5 3.5 0 1 1 5 19.5M5 12.5A3.5 3.5 0 0 1 8.5 9H12V16H8.5A3.5 3.5 0 0 1 5 12.5"/></svg>`
        ).node);
    }
}

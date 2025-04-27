import {Icon} from "../Icon.js";

export class ImageUpscale extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3H21V8M17 21H19A2 2 0 0 0 21 19M21 12V15M21 3 16 8M3 7V5A2 2 0 0 1 5 3M5 21 9.1 16.9A1.2 1.2 0 0 1 11 16.9L13 19M9 3H12"/><rect width="10" height="10" x="3" y="11" rx="1"/></svg>`
        ).node);
    }
}

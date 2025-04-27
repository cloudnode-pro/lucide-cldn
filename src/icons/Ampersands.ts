import {Icon} from "../Icon.js";

export class Ampersands extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 17C5 14 3 10 3 8A2 2 0 0 1 7 8C7 10.5 2 10.5 2 14A3 3 0 0 0 5 17 5 5 0 0 0 10 12M22 17C17 14 15 10 15 8A2 2 0 0 1 19 8C19 10.5 14 10.5 14 14A3 3 0 0 0 17 17 5 5 0 0 0 22 12"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Luggage extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 20A2 2 0 0 1 4 18V8A2 2 0 0 1 6 6H18A2 2 0 0 1 20 8V18A2 2 0 0 1 18 20"/><path d="M8 18V4A2 2 0 0 1 10 2H14A2 2 0 0 1 16 4V18M10 20H14"/><circle cx="16" cy="20" r="2"/><circle cx="8" cy="20" r="2"/></svg>`
        ).node);
    }
}

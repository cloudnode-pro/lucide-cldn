import {Icon} from "../Icon.js";

export class StickyNote extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V8Z"/><path d="M15 3V7A2 2 0 0 0 17 9H21"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Keyboard extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 16H17M8 12"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class SquareTerminal extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 11 9 9 7 7M11 13H15"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>`
        ).node);
    }
}

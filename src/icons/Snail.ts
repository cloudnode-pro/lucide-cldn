import {Icon} from "../Icon.js";

export class Snail extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 13A6 6 0 1 0 14 13 4 4 0 1 0 6 13 2 2 0 0 0 10 13"/><circle cx="10" cy="13" r="8"/><path d="M2 21H14A8 8 0 0 0 22 13V7A2 2 0 1 0 18 7V13M18 3 19.1 5.2M22 3 20.9 5.2"/></svg>`
        ).node);
    }
}

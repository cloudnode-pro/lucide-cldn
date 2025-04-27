import {Icon} from "../Icon.js";

export class Flame extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12C11 10.6 10.5 10 10 9Q8.6 6 12 3 12.9 7 16 9.5 19 11.9 19 15A7 7 0 1 1 5 15 5 5 0 0 1 6 12 2.5 2.5 0 0 0 8.5 14.5"/></svg>`
        ).node);
    }
}

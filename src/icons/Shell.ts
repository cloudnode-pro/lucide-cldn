import {Icon} from "../Icon.js";

export class Shell extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 11A2 2 0 1 1 10 11 4 4 0 0 1 18 11 6 6 0 0 1 6 11 8 8 0 0 1 22 11 10 10 0 1 1 2 11 12 12 0 0 1 4.4 3.8 2 2 0 1 1 7.6 6.2"/></svg>`
        ).node);
    }
}

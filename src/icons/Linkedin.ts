import {Icon} from "../Icon.js";

export class Linkedin extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 16 12 2 2 0 0 0 14 14V21H10V14A6 6 0 0 1 16 8"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`
        ).node);
    }
}

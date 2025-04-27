import {Icon} from "../Icon.js";

export class Facebook extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2H15A5 5 0 0 0 10 7V10H7V14H10V22H14V14H17L18 10H14V7A1 1 0 0 1 15 6H18z"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Repeat2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 9 5 6 8 9"/><path d="M13 18H7A2 2 0 0 1 5 16V6M22 15 19 18 16 15"/><path d="M11 6H17A2 2 0 0 1 19 8V18"/></svg>`
        ).node);
    }
}

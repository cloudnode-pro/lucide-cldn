import {Icon} from "../Icon.js";

export class Disc3 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M6 12Q6 9.4 7.8 7.8"/><circle cx="12" cy="12" r="2"/><path d="M18 12Q18 14.6 16.2 16.2"/></svg>`
        ).node);
    }
}

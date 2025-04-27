import {Icon} from "../Icon.js";

export class IndianRupee extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 3H18M6 8H18M6 13 14.5 21M6 13H9M9 13C15.7 13 15.7 3 9 3"/></svg>`
        ).node);
    }
}

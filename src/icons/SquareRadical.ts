import {Icon} from "../Icon.js";

export class SquareRadical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 12H9L11 17 13 7H17"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`
        ).node);
    }
}

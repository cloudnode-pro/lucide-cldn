import {Icon} from "../Icon.js";

export class SquareCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9.5 8 12 10 14.5M14 9.5 16 12 14 14.5"/><rect width="18" height="18" x="3" y="3" rx="2"/></svg>`
        ).node);
    }
}

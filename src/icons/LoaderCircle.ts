import {Icon} from "../Icon.js";

export class LoaderCircle extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 1 1 14.8 3.4"/></svg>`
        ).node);
    }
}

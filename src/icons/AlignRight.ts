import {Icon} from "../Icon.js";

export class AlignRight extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12H9M21 18H7M21 6H3"/></svg>`
        ).node);
    }
}

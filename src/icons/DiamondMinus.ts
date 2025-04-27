import {Icon} from "../Icon.js";

export class DiamondMinus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.7 10.3A2.4 2.4 0 0 0 2.7 13.7L10.3 21.3A2.4 2.4 0 0 0 13.7 21.3L21.3 13.7A2.4 2.4 0 0 0 21.3 10.3L13.7 2.7A2.4 2.4 0 0 0 10.3 2.7zM8 12H16"/></svg>`
        ).node);
    }
}

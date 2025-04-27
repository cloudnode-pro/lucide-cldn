import {Icon} from "../Icon.js";

export class MarsStroke extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 6 18 10M17 3H21V7M21 3 13.3 10.8"/><circle cx="9" cy="15" r="6"/></svg>`
        ).node);
    }
}

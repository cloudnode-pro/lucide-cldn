import {Icon} from "../Icon.js";

export class RotateCw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 1 1 12 3Q16 3 18.7 5.7L21 8"/><path d="M21 3V8H16"/></svg>`
        ).node);
    }
}

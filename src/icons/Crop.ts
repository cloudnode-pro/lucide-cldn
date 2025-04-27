import {Icon} from "../Icon.js";

export class Crop extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 2V16A2 2 0 0 0 8 18H22"/><path d="M18 22V8A2 2 0 0 0 16 6H2"/></svg>`
        ).node);
    }
}

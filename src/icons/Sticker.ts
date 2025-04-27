import {Icon} from "../Icon.js";

export class Sticker extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.5 3H5A2 2 0 0 0 3 5V19Q3.2 20.8 5 21H19A2 2 0 0 0 21 19V8.5z"/><path d="M14 3V7A2 2 0 0 0 16 9H20M10 16S10.8 17 12 17C13.3 17 14 16 14 16"/></svg>`
        ).node);
    }
}

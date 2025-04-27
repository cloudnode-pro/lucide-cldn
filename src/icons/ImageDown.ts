import {Icon} from "../Icon.js";

export class ImageDown extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.3 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V15L17.9 11.9A2 2 0 0 0 15.1 11.9L6 21"/><path d="M14 19 17 22V16.5M17 22 20 19"/><circle cx="9" cy="9" r="2"/></svg>`
        ).node);
    }
}

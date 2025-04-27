import {Icon} from "../Icon.js";

export class Paperclip extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.2 20.3 21 12.3M16 6 7.6 14.6A2 2 0 0 0 7.6 17.4 2 2 0 0 0 10.4 17.4L18.8 8.8A4 4 0 0 0 18.8 3.2 4 4 0 0 0 13.2 3.2L4.8 11.8A6 6 0 1 0 13.2 20.2"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class PictureInPicture2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 9V6A2 2 0 0 0 19 4H4A2 2 0 0 0 2 6V16Q2.2 17.8 4 18H8"/><rect width="10" height="7" x="12" y="13" rx="2"/></svg>`
        ).node);
    }
}

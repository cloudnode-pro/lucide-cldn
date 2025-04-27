import {Icon} from "../Icon.js";

export class PaintBucket extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11 11 3 2.4 11.6A2 2 0 0 0 2.4 14.4L7.6 19.6Q9 20.8 10.4 19.6zM5 2 10 7M2 13H17M22 20A2 2 0 1 1 18 20C18 18.4 19.7 17.6 20 16 20.3 17.6 22 18.4 22 20"/></svg>`
        ).node);
    }
}

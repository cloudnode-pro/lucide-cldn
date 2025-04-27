import {Icon} from "../Icon.js";

export class Sparkles extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15.5A2 2 0 0 0 8.4 14.1L2.4 12.5A.5.5 0 0 1 2.4 11.5L8.5 10A2 2 0 0 0 9.9 8.5L11.5 2.4A.5.5 0 0 1 12.5 2.4L14 8.5A2 2 0 0 0 15.5 9.9L21.6 11.5A.5.5 0 0 1 21.6 12.5L15.5 14A2 2 0 0 0 14.1 15.5L12.5 21.6A.5.5 0 0 1 11.5 21.6zM20 3V7M22 5H18M4 17V19M5 18H3"/></svg>`
        ).node);
    }
}

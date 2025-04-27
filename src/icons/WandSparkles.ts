import {Icon} from "../Icon.js";

export class WandSparkles extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.6 3.6 20.4 2.4A1.2 1.2 0 0 0 18.6 2.4L2.4 18.6A1.2 1.2 0 0 0 2.4 20.4L3.6 21.6A1.2 1.2 0 0 0 5.4 21.6L21.6 5.4A1.2 1.2 0 0 0 21.6 3.6M14 7 17 10M5 6V10M19 14V18M10 2V4M7 8H3M21 16H17M11 3H9"/></svg>`
        ).node);
    }
}

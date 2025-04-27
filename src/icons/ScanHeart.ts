import {Icon} from "../Icon.js";

export class ScanHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11.2 16.7A1 1 0 0 0 12.8 16.7L16.3 12.6A2.8 2.8 0 1 0 12 9.2 2.8 2.8 0 1 0 7.7 12.6zM17 3H19A2 2 0 0 1 21 5V7M21 17V19A2 2 0 0 1 19 21H17M3 7V5A2 2 0 0 1 5 3H7M7 21H5A2 2 0 0 1 3 19V17"/></svg>`
        ).node);
    }
}

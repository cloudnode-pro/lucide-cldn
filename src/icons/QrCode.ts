import {Icon} from "../Icon.js";

export class QrCode extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16H18A2 2 0 0 0 16 18V21M12 7V10A2 2 0 0 1 10 12H7M16 12H17M12 21V20"/></svg>`
        ).node);
    }
}

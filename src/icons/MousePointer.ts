import {Icon} from "../Icon.js";

export class MousePointer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.6 12.6 19 19M3.7 3A.5.5 0 0 0 3 3.7L9.5 19.7A.5.5 0 0 0 10.5 19.7L12 13.4A2 2 0 0 1 13.5 12.1L19.6 10.5A.5.5 0 0 0 19.6 9.5z"/></svg>`
        ).node);
    }
}

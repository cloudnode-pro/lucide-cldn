import {Icon} from "../Icon.js";

export class MousePointerClick extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 4.1 12 6M5.1 8 2.2 7.2M6 12 4.1 14M7.2 2.2 8 5.1M9 9.7A.5.5 0 0 1 9.7 9L20.7 13.5A.5.5 0 0 1 20.7 14.5L16.2 15.5A1 1 0 0 0 15.5 16.3L14.5 20.6A.5.5 0 0 1 13.5 20.6z"/></svg>`
        ).node);
    }
}

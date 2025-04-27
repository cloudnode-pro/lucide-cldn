import {Icon} from "../Icon.js";

export class MousePointer2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4.7A.5.5 0 0 1 4.7 4L20.7 10.5A.5.5 0 0 1 20.7 11.5L14.4 13A2 2 0 0 0 13.1 14.5L11.5 20.6A.5.5 0 0 1 10.5 20.6z"/></svg>`
        ).node);
    }
}

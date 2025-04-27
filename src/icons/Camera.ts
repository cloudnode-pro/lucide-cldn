import {Icon} from "../Icon.js";

export class Camera extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 4H9.5L7 7H4A2 2 0 0 0 2 9V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V9A2 2 0 0 0 20 7H17z"/><circle cx="12" cy="13" r="3"/></svg>`
        ).node);
    }
}

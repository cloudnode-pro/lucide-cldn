import {Icon} from "../Icon.js";

export class SquarePen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V12"/><path d="M18.4 2.6A1 1 0 0 1 21.4 5.6L12.4 14.6 11.5 15.1 8.6 16A.5.5 0 0 1 8 15.4L9 12.4 9.4 11.7z"/></svg>`
        ).node);
    }
}

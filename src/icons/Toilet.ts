import {Icon} from "../Icon.js";

export class Toilet extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 12H20A1 1 0 0 1 21 13 5 5 0 0 1 16 18H15.4A.5.5 0 0 0 15 18.8L16.5 21.2A.5.5 0 0 1 16.1 22H5.4A.5.5 0 0 1 5 21.2L7 18"/><path d="M8 18A5 5 0 0 1 3 13V4A2 2 0 0 1 5 2H13A2 2 0 0 1 15 4V12"/></svg>`
        ).node);
    }
}

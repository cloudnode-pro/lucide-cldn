import {Icon} from "../Icon.js";

export class Squirrel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15.2 22A3 3 0 0 0 13 17"/><path d="M16 20A3 3 0 0 1 19 17H20A2 2 0 0 0 22 15V13A4 4 0 0 0 18 9V4M18 13"/><path d="M18 6A4 4 0 0 0 14 10 7 7 0 0 0 7 17C7 12 11 12 11 6.5A4.5 4.5 0 1 0 2 6.5 2.5 2.5 0 0 0 7 6.5C7 10 3 11 3 17A5 5 0 0 0 8 22H18"/></svg>`
        ).node);
    }
}

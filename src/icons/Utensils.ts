import {Icon} from "../Icon.js";

export class Utensils extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 2V9Q3.2 10.8 5 11H9A2 2 0 0 0 11 9V2M7 2V22M21 15V2A5 5 0 0 0 16 7V13Q16.2 14.8 18 15zM21 15V22"/></svg>`
        ).node);
    }
}

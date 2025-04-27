import {Icon} from "../Icon.js";

export class LightbulbOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.8 11.2Q18 9.8 18 8A6 6 0 0 0 8.7 3M2 2 22 22M6.3 6.3A5 5 0 0 0 7.5 11.5 5 5 0 0 1 9 14M9 18H15M10 22H14"/></svg>`
        ).node);
    }
}

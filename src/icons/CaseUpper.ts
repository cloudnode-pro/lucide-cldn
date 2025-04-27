import {Icon} from "../Icon.js";

export class CaseUpper extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 15 7 7 11 15M4 13H10M15 11H19.5A2 2 0 0 1 19.5 15H15V7H19A2 2 0 0 1 19 11"/></svg>`
        ).node);
    }
}

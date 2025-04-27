import {Icon} from "../Icon.js";

export class Cigarette extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 12H3A1 1 0 0 0 2 13V15A1 1 0 0 0 3 16H17M18 8C18 5.5 16 5.5 16 3M21 16A1 1 0 0 0 22 15V13A1 1 0 0 0 21 12M22 8C22 5.5 20 5.5 20 3M7 12V16"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class ListRestart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 6H3M7 12H3M7 18H3M12 18A5 5 0 0 0 21 15 4.5 4.5 0 0 0 16.5 10.5Q14.5 10.5 13.1 11.9L11 14"/><path d="M11 10V14H15"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Github extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22V18A5 5 0 0 0 14 14.5C17 14.5 20 12.5 20 9Q20 7.1 19 5.5 19.5 3.8 19 2S18 2 16 3.5Q12 2.8 8 3.5C6 2 5 2 5 2A7 7 0 0 0 5 5.5 5 5 0 0 0 4 9C4 12.5 7 14.5 10 14.5A5 5 0 0 0 9 18V22"/><path d="M9 18C4.5 20 4 16 2 16"/></svg>`
        ).node);
    }
}

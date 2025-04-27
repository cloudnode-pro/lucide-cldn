import {Icon} from "../Icon.js";

export class Apple extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 21C13.5 21 14.8 22 16 22 19 22 22 14 22 9.8A5 5 0 0 0 17 5C14.8 5 13 6.4 12 7 11 6.4 9.2 5 7 5A5 5 0 0 0 2 9.8C2 14 5 22 8 22 9.3 22 10.5 21 12 21"/><path d="M10 2C11 2.5 12 4 12 7"/></svg>`
        ).node);
    }
}

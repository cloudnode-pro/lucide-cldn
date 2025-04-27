import {Icon} from "../Icon.js";

export class Twitter extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 4S21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19Q5.5 19.1 8 17A8.5 8.5 0 0 1 3 5C5.2 7.6 8.6 9.1 12 9 11.1 4.8 16 2.4 19 5.2 20.1 5.2 22 4 22 4"/></svg>`
        ).node);
    }
}

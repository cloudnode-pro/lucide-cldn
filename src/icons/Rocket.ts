import {Icon} from "../Icon.js";

export class Rocket extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M4.5 16.5C3 17.8 2.5 21.5 2.5 21.5S6.2 21 7.5 19.5C8.2 18.7 8.2 17.4 7.5 16.5A2 2 0 0 0 4.4 16.6M12 15 9 12A22 22 0 0 1 11 8 13 13 0 0 1 22 2C22 4.7 21.2 9.5 16 13A22 22 0 0 1 12 15"/><path d="M9 12H4S4.6 9 6 8C7.6 7 11 8 11 8M12 15V20S15 19.5 16 18C17 16.4 16 13 16 13"/></svg>`
        ).node);
    }
}

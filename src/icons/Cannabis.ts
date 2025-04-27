import {Icon} from "../Icon.js";

export class Cannabis extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22V18M7 12C5.5 12 2.5 13.5 2 15 5.5 16.5 8 16 8 16A7 7 0 0 0 6 21C8.5 21 10.5 19.5 12 18 13.5 19.5 15.5 21 18 21 18 19.5 17.5 17.5 16 16 16 16 18.5 16.5 22 15 21.5 13.5 18.5 12 17 12 18.5 11 21 8 21 6 18.5 6 15.5 7.5 14 9Q14.1 5.1 12 2 9.9 5.1 10 9C8.5 7.5 5.5 6 3 6 3 8 5.5 11 7 12"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class LeafyGreen extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22C3.3 21 4.3 20 5.9 19.8A6 6 0 0 1 9.7 21.3 4 4 0 0 0 15.9 18.9 3.5 3.5 0 0 0 19.6 14 3.5 3.5 0 0 0 20.9 8 3.5 3.5 0 1 0 16 3 3.5 3.5 0 0 0 10.2 4.4 3.5 3.5 0 0 0 5 8.1 4 4 0 0 0 2.7 14.3C3.5 15.4 4.4 16.7 4.2 18 3.9 19.7 3 20.7 2 22M2 22 17 7"/></svg>`
        ).node);
    }
}

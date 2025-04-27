import {Icon} from "../Icon.js";

export class Ship extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 10.2V14M12 2V5M19 13V7A2 2 0 0 0 17 5H7A2 2 0 0 0 5 7V13"/><path d="M19.4 20A12 12 0 0 0 21 14L12.8 10.4A2 2 0 0 0 11.2 10.4L3 14A12 12 0 0 0 5.8 21.8"/><path d="M2 21Q2.7 21.9 4.5 22C7 22 7 20 9.5 20Q11.3 20.1 12 21C12.7 21.9 13.2 22 14.5 22 17 22 17 20 19.5 20Q21.3 20.1 22 21"/></svg>`
        ).node);
    }
}

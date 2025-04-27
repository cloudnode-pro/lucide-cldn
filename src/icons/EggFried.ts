import {Icon} from "../Icon.js";

export class EggFried extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8C3 4.5 5.5 2 9.5 2 14.5 2 14.3 5 17 7S22 9 22 13Q21.9 19.6 15 19.5C12.5 19.5 12.5 22 9 22S2 20 2 16.5C2 13.5 3.5 13.5 3.5 11.5 3.5 10 3 9 3 8"/></svg>`
        ).node);
    }
}

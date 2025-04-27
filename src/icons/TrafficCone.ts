import {Icon} from "../Icon.js";

export class TrafficCone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11A5 2.5 0 0 1 8 11M17 14 21.3 16A1 1 0 0 1 21.4 18L12.8 21.7A2 2 0 0 1 11.2 21.8L2.6 18A1 1 0 0 1 2.6 16.1L7.1 14"/><path d="M17 14.1A5 2.5 0 1 1 7 14.1L10 3.5A2 2 0 0 1 14 3.5z"/><path d="M9.2 6.6A5 2.5 0 0 0 14.8 6.6"/></svg>`
        ).node);
    }
}

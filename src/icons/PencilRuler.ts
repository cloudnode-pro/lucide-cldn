import {Icon} from "../Icon.js";

export class PencilRuler extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 7 8.7 2.7A2.4 2.4 0 0 0 5.3 2.7L2.7 5.3A2.4 2.4 0 0 0 2.7 8.7L7 13M8 6 10 4M18 16 20 14M17 11 21.3 15.3C22.3 16.3 22.3 17.8 21.3 18.7L18.7 21.3C17.7 22.3 16.2 22.3 15.3 21.3L11 17"/><path d="M21.2 6.8A1 1 0 0 0 17.2 2.8L3.8 16.2 3.3 17 2 21.4A.5.5 0 0 0 2.6 22L7 20.7 7.8 20.2zM15 5 19 9"/></svg>`
        ).node);
    }
}

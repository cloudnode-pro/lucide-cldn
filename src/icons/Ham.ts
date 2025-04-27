import {Icon} from "../Icon.js";

export class Ham extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13.1 21.1A7.3 10.4 45 1 0 3 11"/><path d="M13.1 21.1A7.3 4.4 45 0 0 3 11 7.3 4.4 45 0 0 13 21M16.6 10.4 18.6 8.4A2.5 2.5 0 1 0 20.3 3.8 2.5 2.5 0 1 0 15.6 5.4L13.6 7.4M8.5 16.5 7.5 15.5"/></svg>`
        ).node);
    }
}

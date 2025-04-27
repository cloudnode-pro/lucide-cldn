import {Icon} from "../Icon.js";

export class Fan extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.8 16.4A6 6 0 0 1 2.2 9.4L7.6 10.8A6 6 0 0 1 14.6 2.2L13.2 7.6A6 6 0 0 1 21.8 14.6L16.4 13.2A6 6 0 0 1 9.4 21.8zM12 12"/></svg>`
        ).node);
    }
}

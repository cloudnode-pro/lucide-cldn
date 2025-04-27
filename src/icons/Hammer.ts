import {Icon} from "../Icon.js";

export class Hammer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M15 12 6.6 20.4A1 1 0 1 1 3.6 17.4L12 9M18 15 22 11"/><path d="M21.5 11.5 19.5 9.5A2 2 0 0 1 19 8.3V7L16.7 4.7A6 6 0 0 0 12.5 3H9L10 3.8A6 6 0 0 1 12 8.4V10L14 12H15.2A2 2 0 0 1 16.6 12.6L18.5 14.5"/></svg>`
        ).node);
    }
}

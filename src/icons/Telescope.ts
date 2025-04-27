import {Icon} from "../Icon.js";

export class Telescope extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 12.5 4 13.8A1 1 0 0 1 2.8 13.1L2.2 11A1 1 0 0 1 3 9.7L16.4 5.3M13.6 11.7 17.9 10.8M16 21 12.9 14.8"/><path d="M16.5 6A2 2 0 0 1 17.9 3.4L19 3.2A1 1 0 0 1 20.2 4L21.8 10A1 1 0 0 1 21 11.2L20 11.5A2 2 0 0 1 17.4 10.1zM6.2 8.6 7.2 13.1M8 21 11.1 14.8"/><circle cx="12" cy="13" r="2"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Cctv extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16.8 12H20.4A1 1 0 0 1 21.3 13.4L19.3 17.5A1 1 0 0 1 17.4 17.6L15.5 14.7"/><path d="M17.1 9A1 1 0 0 1 17.6 10.5L14.4 16.6A1 1 0 0 1 13.1 17.1L3.6 12.3A3 3 0 0 1 2.3 8.3L3.7 5.7A3 3 0 0 1 7.7 4.3z"/><path d="M2 19H5.8A2 2 0 0 0 7.6 17.9L9 15M2 21V17M7 9"/></svg>`
        ).node);
    }
}

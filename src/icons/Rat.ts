import {Icon} from "../Icon.js";

export class Rat extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 22H4A2 2 0 0 1 4 18H16M13.2 18A3 3 0 0 0 11 13M16 9"/><path d="M16.8 4A3 3 0 1 1 20.1 8.7L21.9 11.4A1.5 1.5 0 0 1 20.4 13.4L17.5 13A3 3 0 0 0 14 16"/><path d="M17 5A3 3 0 1 0 11.8 7 7 7 0 0 0 4 14 4 4 0 0 0 8 18"/></svg>`
        ).node);
    }
}

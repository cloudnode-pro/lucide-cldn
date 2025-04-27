import {Icon} from "../Icon.js";

export class Carrot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.3 21.7S12 18.2 15 15.3A4.5 4.5 0 0 0 8.6 9 51 51 0 0 0 2.3 21.7M8.6 14 6.6 12M15.3 15 13 12.5"/><path d="M22 9S20.7 7 18.5 7C16.9 7 15 9 15 9S16.3 11 18.5 11 22 9 22 9"/><path d="M15 2S13 3.3 13 5.5 15 9 15 9 17 7.2 17 5.5C17 3.3 15 2 15 2"/></svg>`
        ).node);
    }
}

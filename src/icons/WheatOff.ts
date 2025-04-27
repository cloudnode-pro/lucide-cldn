import {Icon} from "../Icon.js";

export class WheatOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22 12 12M16 8 14.8 9.2M3.5 12.5 5 11 6.5 12.5A3.5 3.5 0 0 1 6.5 17.5L5 19 3.5 17.5A3.5 3.5 0 0 1 3.5 12.5"/><path d="M8 8 7.5 8.5A3.5 3.5 0 0 0 7.5 13.5L9 15 10.5 13.5Q11.5 12.5 11.5 11.5M11 5.3Q11 4.9 11.4 4.5L13 3 14.5 4.5A3.5 3.5 0 0 1 14.8 9.2M20 2H22V4A4 4 0 0 1 18 8H16V6A4 4 0 0 1 20 2M11.5 17.5 13 19 11.5 20.5A3.5 3.5 0 0 1 6.5 20.5L5 19 6.5 17.5A3.5 3.5 0 0 1 11.5 17.5"/><path d="M16 16 15.5 16.5A3.5 3.5 0 0 1 10.5 16.5L9 15 10.5 13.5A4 4 0 0 1 12.5 12.5M18.7 13Q19.1 13 19.5 12.6L21 11 19.5 9.5A3.5 3.5 0 0 0 14.8 9.2"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class PointerOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 4.5V4A2 2 0 0 0 7.6 2M13.9 8.4A2 2 0 0 0 12.6 7.1M21.7 16.2 22 14V11A2 2 0 1 0 18 11V10A2 2 0 0 0 14.4 8.8M7 15 5.2 13.2A2 2 0 0 0 2.4 16.1L6 19.7A8 8 0 0 0 12 22H14A8 8 0 0 0 19.7 19.7M6 6V14M2 2 22 22"/></svg>`
        ).node);
    }
}

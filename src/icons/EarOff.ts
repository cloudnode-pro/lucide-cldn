import {Icon} from "../Icon.js";

export class EarOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18.5A3.5 3.5 0 1 0 13 18.5C13 16.9 14 16 15 15M6 8.5Q6 7.4 6.4 6.4M8.8 3.2A6.5 6.5 0 0 1 19 8.5Q19 10.9 18 12.3"/><path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13A2 2 0 0 0 11.8 11.8"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}

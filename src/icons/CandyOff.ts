import {Icon} from "../Icon.js";

export class CandyOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10V17.9M11.8 6.1A5 5 0 0 1 17.8 12.2M14 6.1V8.3M15.5 15.6 14.5 16.6A5 5 0 0 1 7.5 16.5 5 5 0 0 1 7.5 9.4L8.5 8.5"/><path d="M16 7V3A1 1 0 0 1 17.7 2.3 3 3 0 0 0 20 3 1 1 0 0 1 20.9 4.1 3 3 0 0 0 21.8 6.3 1 1 0 0 1 21 8H17M2 2 22 22M8 17V21A1 1 0 0 1 6.3 21.7 3 3 0 0 0 4 21 1 1 0 0 1 3.1 19.9 3 3 0 0 0 2.2 17.7 1 1 0 0 1 3 16H7"/></svg>`
        ).node);
    }
}

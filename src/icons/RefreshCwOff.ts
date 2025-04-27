import {Icon} from "../Icon.js";

export class RefreshCwOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8 18.7 5.7A10 10 0 0 0 12 3Q10.5 3 9.1 3.5M8 16H3V21M3 12Q3.1 8.2 5.6 5.6"/><path d="M3 16 5.3 18.3A10 10 0 0 0 12 21Q15.8 20.9 18.4 18.4M21 12Q21 13.5 20.5 14.9M21 3V8H16M22 22 2 2"/></svg>`
        ).node);
    }
}

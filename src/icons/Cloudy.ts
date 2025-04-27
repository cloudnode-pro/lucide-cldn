import {Icon} from "../Icon.js";

export class Cloudy extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17.5 21H9A7 7 0 1 1 15.7 12H17.5A4.5 4.5 0 1 1 17.5 21"/><path d="M22 10A3 3 0 0 0 19 7H16.8A5.5 5.5 0 0 0 6 7.5"/></svg>`
        ).node);
    }
}

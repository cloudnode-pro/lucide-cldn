import {Icon} from "../Icon.js";

export class Sprout extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 20H17M10 20C15.5 17.5 10.8 13.6 13 10"/><path d="M9.5 9.4Q11.1 10.7 11.8 13.1 8.8 13.8 7 12.8 5.1 12 4 8.6 8 8 9.5 9.4M14.1 6A7 7 0 0 0 13 10Q15.8 9.8 17.3 8.6 18.8 7.3 19 4C16.3 4.1 15 5 14.1 6"/></svg>`
        ).node);
    }
}

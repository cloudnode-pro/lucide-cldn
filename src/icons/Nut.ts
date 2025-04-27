import {Icon} from "../Icon.js";

export class Nut extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4V2M5 10V14A7 7 0 0 0 10.3 20.8Q11 20.8 11.3 21.4L12 22 12.6 21.4Q13.1 21 13.7 20.8A7 7 0 0 0 19 14V10"/><path d="M12 4C8 4 4.5 6 4 8Q3.6 9.5 2 11A5 5 0 0 0 5 10 5 5 0 0 0 7 12C8.5 11.4 9 10.9 9.5 10Q10.2 11.3 12 12 13.8 11.3 14.5 10 15.2 11.3 17 12 18.7 11.4 19 10C20 11 20.7 11.2 22 11Q20.2 9.5 20 8C19.5 6 16 4 12 4"/></svg>`
        ).node);
    }
}

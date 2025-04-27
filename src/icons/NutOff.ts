import {Icon} from "../Icon.js";

export class NutOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4V2M5 10V14A7 7 0 0 0 10.3 20.8Q11 20.8 11.3 21.4L12 22 12.6 21.4Q13.1 21 13.7 20.8A7 7 0 0 0 17.8 17.8M19 10V13.3"/><path d="M12 12Q10.1 11.3 9.5 10C9 10.9 8.5 11.4 7 12A5 5 0 0 1 5 10 5 5 0 0 1 2 11Q3.6 9.5 4 8 4.3 6.8 5.8 5.8M17.4 11.8Q18.7 11.2 19 10C20 11 20.7 11.2 22 11Q20.2 9.5 20 8C19.5 6 16 4 12 4Q10.9 4 9.9 4.2"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}

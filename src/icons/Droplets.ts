import {Icon} from "../Icon.js";

export class Droplets extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M7 16.3A4 4 0 0 0 11 12.3Q11 10.5 9.3 9A5 5 0 0 1 7 5.3Q6.5 7.6 4.7 9.1C3 10.6 3 11 3 12.3A4 4 0 0 0 7 16.3"/><path d="M12.6 6.6A11 11 0 0 0 14 3C14.5 5.5 16 8 18 9.5S21 13 21 15A7 7 0 0 1 9 20"/></svg>`
        ).node);
    }
}

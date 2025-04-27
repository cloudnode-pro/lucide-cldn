import {Icon} from "../Icon.js";

export class TrainFront extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 3.1V7A4 4 0 0 0 16 7V3.1M9 15 8 14M15 15 16 14"/><path d="M9 19A5 5 0 0 1 4 14V10A8 8 0 0 1 20 10V14A5 5 0 0 1 15 19ZM8 19 6 22M16 19 18 22"/></svg>`
        ).node);
    }
}

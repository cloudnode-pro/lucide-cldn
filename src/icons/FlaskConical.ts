import {Icon} from "../Icon.js";

export class FlaskConical extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V8L14.2 9 19.8 19A2 2 0 0 1 18 22H6A2 2 0 0 1 4.2 19L9.8 9 10 8V2M6.5 15H17.5M8.5 2H15.5"/></svg>`
        ).node);
    }
}

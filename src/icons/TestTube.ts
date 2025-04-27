import {Icon} from "../Icon.js";

export class TestTube extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 2V19.5C14.5 20.9 13.4 22 12 22A2.5 2.5 0 0 1 9.5 19.5V2M8.5 2H15.5M14.5 16H9.5"/></svg>`
        ).node);
    }
}

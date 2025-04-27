import {Icon} from "../Icon.js";

export class Wine extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 22H16M7 10H17M12 15V22M12 15A5 5 0 0 0 17 10C17 8 16.5 6 15 2H9C7.5 6 7 8 7 10A5 5 0 0 0 12 15"/></svg>`
        ).node);
    }
}

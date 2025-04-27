import {Icon} from "../Icon.js";

export class Watch extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><polyline points="12 10 12 12 13 13"/><path d="M16.1 7.7 15.3 3.7A2 2 0 0 0 13.3 2H10.6A2 2 0 0 0 8.6 3.6L8 7.6M7.9 16.4 8.7 20.4A2 2 0 0 0 10.7 22H13.4A2 2 0 0 0 15.4 20.4L16.2 16.4"/></svg>`
        ).node);
    }
}

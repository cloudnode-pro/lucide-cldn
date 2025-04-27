import {Icon} from "../Icon.js";

export class OctagonAlert extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8V12M15.3 2A2 2 0 0 1 16.7 2.6L21.4 7.3A2 2 0 0 1 22 8.7V15.3A2 2 0 0 1 21.4 16.7L16.7 21.4A2 2 0 0 1 15.3 22H8.7A2 2 0 0 1 7.3 21.4L2.6 16.7A2 2 0 0 1 2 15.3V8.7A2 2 0 0 1 2.6 7.3L7.3 2.6A2 2 0 0 1 8.7 2z"/></svg>`
        ).node);
    }
}

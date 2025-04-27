import {Icon} from "../Icon.js";

export class AlarmSmoke extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 21C11 18.5 13 18.5 13 16M16 21C16 18.5 18 18.5 18 16M19 8 18.2 11A1.3 1.3 0 0 1 17 12H7A1.3 1.3 0 0 1 5.8 11L5 8M21 3A1 1 0 0 1 22 4V6A2 2 0 0 1 20 8H4A2 2 0 0 1 2 6V4A1 1 0 0 1 3 3zM6 21C6 18.5 8 18.5 8 16"/></svg>`
        ).node);
    }
}

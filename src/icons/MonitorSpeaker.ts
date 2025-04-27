import {Icon} from "../Icon.js";

export class MonitorSpeaker extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.5 20H8M17 9"/><rect width="10" height="16" x="12" y="4" rx="2"/><path d="M8 6H4A2 2 0 0 0 2 8V14A2 2 0 0 0 4 16H8"/><circle cx="17" cy="15" r="1"/></svg>`
        ).node);
    }
}

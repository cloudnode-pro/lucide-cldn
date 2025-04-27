import {Icon} from "../Icon.js";

export class Heater extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 8C13 5 9 5 11 2M15.5 8C17.5 5 13.5 5 15.5 2M10 16V12M14 16V12M18 16V12"/><path d="M20 6A2 2 0 0 1 22 8V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V8A2 2 0 0 1 4 6H7M5 20V22M19 20V22"/></svg>`
        ).node);
    }
}

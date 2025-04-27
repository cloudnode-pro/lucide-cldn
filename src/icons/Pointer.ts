import {Icon} from "../Icon.js";

export class Pointer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 14A8 8 0 0 1 14 22M18 11V10A2 2 0 0 0 16 8 2 2 0 0 0 14 10M14 10V9A2 2 0 0 0 12 7 2 2 0 0 0 10 9V10M10 9.5V4A2 2 0 0 0 8 2 2 2 0 0 0 6 4V14"/><path d="M18 11A2 2 0 1 1 22 11V14A8 8 0 0 1 14 22H12A8 8 0 0 1 6 19.7L2.4 16A2 2 0 0 1 5.2 13.2L7 15"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class Gamepad2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15" y1="12" y2="12"/><line x1="18" x2="18" y1="10" y2="10"/><path d="M17.3 5H6.7A4 4 0 0 0 2.7 8.6V8.7C2.6 9.4 2 14.5 2 16A3 3 0 0 0 5 19Q6.4 18.9 7 18L8.4 16.6A2 2 0 0 1 9.8 16H14.2A2 2 0 0 1 15.6 16.6L17 18Q17.6 18.9 19 19A3 3 0 0 0 22 16C22 14.5 21.4 9.4 21.3 8.7V8.6A4 4 0 0 0 17.3 5"/></svg>`
        ).node);
    }
}

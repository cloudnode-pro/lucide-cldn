import {Icon} from "../Icon.js";

export class TrainFrontTunnel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V12A10 10 0 1 1 22 12V22"/><path d="M15 6.8V8.2A3 2.8 0 1 1 9 8.2V6.8M14 15"/><path d="M10 19A4 4 0 0 1 6 15V12A6 6 0 1 1 18 12V15A4 4 0 0 1 14 19ZM9 19 7 22M15 19 17 22"/></svg>`
        ).node);
    }
}

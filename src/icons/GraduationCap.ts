import {Icon} from "../Icon.js";

export class GraduationCap extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.4 11A1 1 0 0 0 21.4 9L12.8 5.3A2 2 0 0 0 11.2 5.2L2.6 9A1 1 0 0 0 2.6 10.9L11.2 15A2 2 0 0 0 12.8 14.8zM22 10V16"/><path d="M6 12.5V16A6 3 0 0 0 18 16V12.5"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class LandPlot extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8 18 5 12 2V12M8 12 2.5 15A1 1 0 0 0 2.5 17L11 21.7A2 2 0 0 0 13 21.7L21.5 17A1 1 0 0 0 21.5 15L16 12M6.5 12.9 17.5 19M17.5 12.9 6.5 19"/></svg>`
        ).node);
    }
}

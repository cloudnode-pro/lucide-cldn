import {Icon} from "../Icon.js";

export class Dam extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 11.3C12.2 12 12.5 13 14.5 13 17 13 17 11 19.5 11Q21.3 11.1 22 12M11.8 18Q12.4 18.9 14.5 19C17 19 17 17 19.5 17Q21.3 17.1 22 18M2 10H6M2 14H6M2 18H6M2 6H6M7 3A1 1 0 0 0 6 4V20A1 1 0 0 0 7 21H11A1 1 0 0 0 12 20L10 4A1 1 0 0 0 9 3z"/></svg>`
        ).node);
    }
}

import {Icon} from "../Icon.js";

export class WavesLadder extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 5A2 2 0 0 0 17 7V18"/><path d="M2 18Q2.7 18.9 4.5 19C7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17Q21.3 17.1 22 18M7 13H17M7 9H17"/><path d="M9 5A2 2 0 0 0 7 7V18"/></svg>`
        ).node);
    }
}

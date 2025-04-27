import {Icon} from "../Icon.js";

export class PawPrint extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10A5 5 0 0 1 14 15V18.5A3.5 3.5 0 0 1 7.2 19.5Q6.5 17.5 4.5 16.8A3.5 3.5 0 0 1 5.5 10Z"/></svg>`
        ).node);
    }
}

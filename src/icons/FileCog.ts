import {Icon} from "../Icon.js";

export class FileCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2V6A2 2 0 0 0 16 8H20M2.3 15.5 3.3 15.1M3.2 12.9 2.3 12.5"/><path d="M4.7 21.5A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V7L15 2H6A2 2 0 0 0 4 4V6.5M4.9 11.2 4.5 10.3M4.9 16.8 4.5 17.7M7.1 11.2 7.5 10.3M7.5 17.7 7.1 16.7M8.8 12.9 9.7 12.5M8.8 15.1 9.7 15.5"/><circle cx="6" cy="14" r="3"/></svg>`
        ).node);
    }
}

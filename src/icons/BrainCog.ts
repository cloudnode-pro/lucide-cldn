import {Icon} from "../Icon.js";

export class BrainCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.9 14.8 10.5 15.7M10.9 9.2 10.5 8.3M13.1 14.8 13.5 15.7M13.5 8.3 13.1 9.3M14.8 10.9 15.7 10.5M14.8 13.1 15.7 13.5M17.6 6.5A3 3 0 1 0 12 5 3 3 0 0 0 6.4 3.6L6 5A4 4 0 0 0 3.5 11"/><path d="M18 5.1A4 4 0 0 1 20.5 11"/><path d="M19.5 10.3A4 4 0 0 1 18 18"/><path d="M4 17.5A4 4 0 0 0 11.5 20C11.6 19.7 12.4 19.7 12.5 20A4 4 0 0 0 20 17.5"/><path d="M4.5 10.3A4 4 0 0 0 6 18M6 5.1 6.4 6.5M9.2 10.9 8.3 10.5M9.2 13.1 8.3 13.5"/><circle cx="12" cy="12" r="3"/></svg>`
        ).node);
    }
}

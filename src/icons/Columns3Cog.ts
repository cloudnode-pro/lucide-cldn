import {Icon} from "../Icon.js";

export class Columns3Cog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.5 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5V10.5M14.3 19.6 15.3 19.2M15 3V10.5M15.2 16.9 14.3 16.6M16.6 21.7 16.9 20.8M16.8 15.3 16.4 14.3M19.1 15.2 19.4 14.3M19.6 21.7 19.2 20.7M20.7 16.8 21.7 16.4M21.7 19.4 20.8 19.1M9 3V21"/><circle cx="18" cy="18" r="3"/></svg>`
        ).node);
    }
}

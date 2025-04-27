import {Icon} from "../Icon.js";

export class Settings extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12.2 2H11.8A2 2 0 0 0 9.8 4V4.2A2 2 0 0 1 8.8 5.9L8.4 6.2A2 2 0 0 1 6.4 6.2L6.2 6A2 2 0 0 0 3.5 6.8L3.3 7.2A2 2 0 0 0 4 9.9V10A2 2 0 0 1 5.1 11.7V12.3A2 2 0 0 1 4.1 14H4A2 2 0 0 0 3.3 16.9L3.5 17.2A2 2 0 0 0 6.2 17.9H6.4A2 2 0 0 1 8.4 17.8L8.8 18A2 2 0 0 1 9.8 19.8V20A2 2 0 0 0 11.8 22H12.2A2 2 0 0 0 14.2 20V19.8A2 2 0 0 1 15.2 18.1L15.7 17.8A2 2 0 0 1 17.7 17.8L17.8 18A2 2 0 0 0 20.5 17.2L20.7 16.8A2 2 0 0 0 20 14.1V14A2 2 0 0 1 18.9 12.2V11.7A2 2 0 0 1 19.9 10H20A2 2 0 0 0 20.7 7.1L20.5 6.8A2 2 0 0 0 17.8 6.1H17.6A2 2 0 0 1 15.7 6.2L15.2 6A2 2 0 0 1 14.2 4.2V4A2 2 0 0 0 12.2 2"/><circle cx="12" cy="12" r="3"/></svg>`
        ).node);
    }
}

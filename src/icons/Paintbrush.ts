import {Icon} from "../Icon.js";

export class Paintbrush extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.6 17.9 4 14.9M18.4 2.6A1 1 0 1 1 21.4 5.6L17.4 9.6A.5.5 0 0 0 17.4 10.4L18.3 11.3A2.4 2.4 0 0 1 18.3 14.7L17.3 15.7H16.8L8.4 7.2V6.6L9.3 5.7A2.4 2.4 0 0 1 12.7 5.7L13.7 6.7 14.3 6.6zM9 8C7.2 10.7 5 11.5 2.4 12A.5.5 0 0 0 2.1 12.7L9.4 21.6A1 1 0 0 0 10.6 22C12.7 20.4 16 16.8 16 15"/></svg>`
        ).node);
    }
}

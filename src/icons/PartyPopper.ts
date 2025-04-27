/*
 * Copyright © 2025 Cloudnode OÜ.
 *
 * This file is part of lucide-cldn.
 *
 * lucide-cldn is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * lucide-cldn is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with lucide-cldn.
 * If not, see <https://www.gnu.org/licenses/lgpl-3.0.en.html>.
 */
import {Icon} from "../Icon.js";

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.8 11.3 2 22 12.7 18.2M22 2 19.8 2.8A3 3 0 0 0 17.8 5.8Q17.8 7.5 16.3 7.6H16Q14.6 7.6 14.2 8.9L14 10M22 13 21.2 12.7Q19.7 12.3 19.2 13.7 19 15 17.8 15H17M11 2 11.3 2.8Q11.7 4.3 10.3 4.8 9 5.1 9 6.2V7"/><path d="M11 13C13 15 13.8 17.2 13 18S10 18 8 16 5.2 11.8 6 11 9 11 11 13"/></svg>
 */
export class PartyPopper extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M5.8 11.3 2 22 12.7 18.2M22 2 19.8 2.8A3 3 0 0 0 17.8 5.8Q17.8 7.5 16.3 7.6H16Q14.6 7.6 14.2 8.9L14 10M22 13 21.2 12.7Q19.7 12.3 19.2 13.7 19 15 17.8 15H17M11 2 11.3 2.8Q11.7 4.3 10.3 4.8 9 5.1 9 6.2V7"/><path d="M11 13C13 15 13.8 17.2 13 18S10 18 8 16 5.2 11.8 6 11 9 11 11 13"/></svg>`
        ).node);
    }
}

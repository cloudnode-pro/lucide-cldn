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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7.5V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H8.5M16 2V6M8 2V6M3 10H8M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>
 */
export class CalendarClock extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 7.5V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H8.5M16 2V6M8 2V6M3 10H8M17.5 17.5 16 16.3V14"/><circle cx="16" cy="16" r="6"/></svg>`
        ).node);
    }
}

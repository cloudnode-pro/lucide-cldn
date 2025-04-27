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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10H21V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H12M8 2V6M16 2V6"/><path d="M21.3 14.7A2.4 2.4 0 0 0 18.6 14.2L17.8 14.7 17.5 15 17.2 14.7A2.4 2.4 0 0 0 14.5 14.2L13.7 14.7Q12.2 16.4 14 18.5L17.5 22 21.1 18.5C22.3 17.2 22.2 15.6 21.3 14.7"/></svg>
 */
export class CalendarHeart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10H21V6A2 2 0 0 0 19 4H5A2 2 0 0 0 3 6V20A2 2 0 0 0 5 22H12M8 2V6M16 2V6"/><path d="M21.3 14.7A2.4 2.4 0 0 0 18.6 14.2L17.8 14.7 17.5 15 17.2 14.7A2.4 2.4 0 0 0 14.5 14.2L13.7 14.7Q12.2 16.4 14 18.5L17.5 22 21.1 18.5C22.3 17.2 22.2 15.6 21.3 14.7"/></svg>`
        ).node);
    }
}

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

export class Phone extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 17V20A2 2 0 0 1 19.8 22 20 20 0 0 1 11.2 18.8 20 20 0 0 1 5.2 12.9 20 20 0 0 1 2.2 4.2 2 2 0 0 1 4.1 2H7.1A2 2 0 0 1 9.1 3.7L9.7 6.5A2 2 0 0 1 9.4 8.6L8 10A16 16 0 0 0 14 16L15.4 14.6A2 2 0 0 1 17.4 14.2L20.4 14.9A2 2 0 0 1 22 16.9"/></svg>`
        ).node);
    }
}

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

export class Worm extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12 17.5 15M19.6 18.8 22 20M6.5 8.2A1.7 1.7 0 0 1 8.9 10.2L8.3 12.2A6.8 6.8 0 0 0 18.4 20L19 19.6A1 1 0 1 0 16 15.4L15.7 15.7A1.8 1.8 0 0 1 13.1 13.7L13.7 11.7A6.7 6.7 0 0 0 4 3.8L3.2 4.3A1 1 0 1 0 5.8 8.6z"/></svg>`
        ).node);
    }
}

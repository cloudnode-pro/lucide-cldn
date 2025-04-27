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

export class Volume2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 4.7A.7.7 0 0 0 9.8 4.2L6.4 7.6A1 1 0 0 1 5.4 8H3A1 1 0 0 0 2 9V15A1 1 0 0 0 3 16H5.4A1 1 0 0 1 6.4 16.4L9.8 19.8A.7.7 0 0 0 11 19.3zM16 9A5 5 0 0 1 16 15M19.4 18.4A9 9 0 0 0 19.4 5.6"/></svg>`
        ).node);
    }
}

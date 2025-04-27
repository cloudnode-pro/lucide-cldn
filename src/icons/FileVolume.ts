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

export class FileVolume extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 11A5 5 0 0 1 11 17M14 2V6A2 2 0 0 0 16 8H20"/><path d="M4 6.8V4A2 2 0 0 1 6 2H15L20 7V20A2 2 0 0 1 18 22H6L5 21.8"/><path d="M7 10.5A.5.5 0 0 0 6.2 10.1L4.2 11.8 3.7 12H2.5L2 12.5V15.5L2.5 16H3.6L4.3 16.2 6.2 18A.5.5 0 0 0 7 17.5z"/></svg>`
        ).node);
    }
}

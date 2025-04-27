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

export class MapPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M11 19 9.9 18.4A2 2 0 0 0 8 18.4L4.4 20.3A1 1 0 0 1 3 19.3V6.7A1 1 0 0 1 3.6 5.7L8 3.4A2 2 0 0 1 10 3.4L14 5.6A2 2 0 0 0 16 5.6L19.6 3.7A1 1 0 0 1 21 4.7V12M15 5.8V12M18 15V21M21 18H15M9 3.2V18.2"/></svg>`
        ).node);
    }
}

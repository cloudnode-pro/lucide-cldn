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

export class Ruler extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21.3 15.3A2.4 2.4 0 0 1 21.3 18.7L18.7 21.3A2.4 2.4 0 0 1 15.3 21.3L2.7 8.7A2.4 2.4 0 0 1 2.7 5.3L5.3 2.7A2.4 2.4 0 0 1 8.7 2.7ZM14.5 12.5 16.5 10.5M11.5 9.5 13.5 7.5M8.5 6.5 10.5 4.5M17.5 15.5 19.5 13.5"/></svg>`
        ).node);
    }
}

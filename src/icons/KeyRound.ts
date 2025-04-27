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

export class KeyRound extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2.6 17.4A2 2 0 0 0 2 18.8V21A1 1 0 0 0 3 22H6A1 1 0 0 0 7 21V20A1 1 0 0 1 8 19H9A1 1 0 0 0 10 18V17A1 1 0 0 1 11 16H11.2A2 2 0 0 0 12.6 15.4L13.4 14.6A6.5 6.5 0 1 0 9.4 10.6z"/><circle cx="16.5" cy="7.5" r="0.5" fill="currentColor"/></svg>`
        ).node);
    }
}

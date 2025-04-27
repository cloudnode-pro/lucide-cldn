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

export class Pin extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 17V22M9 10.8A2 2 0 0 1 7.9 12.5L6 13.6A2 2 0 0 0 5 15.2V16A1 1 0 0 0 6 17H18A1 1 0 0 0 19 16V15.2A2 2 0 0 0 17.9 13.5L16 12.5A2 2 0 0 1 15 10.9V7A1 1 0 0 1 16 6 2 2 0 0 0 16 2H8A2 2 0 0 0 8 6 1 1 0 0 1 9 7z"/></svg>`
        ).node);
    }
}

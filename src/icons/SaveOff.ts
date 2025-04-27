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

export class SaveOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13H8A1 1 0 0 0 7 14V21M14 8H15M17 21V17M2 2 22 22"/><path d="M20.4 20.4A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 3.6 3.6M29.5 11.5S34.5 16.5 33.5 16.5M9 3H15.2A2 2 0 0 1 16.6 3.6L20.4 7.4A2 2 0 0 1 21 8.8V15"/></svg>`
        ).node);
    }
}

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

export class TruckElectric extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 19V7A2 2 0 0 0 12 5H9M15 19H9M19 19H21A1 1 0 0 0 22 18V14.4L21.8 13.7 18.3 9.4A1 1 0 0 0 17.5 9H14M2 13V18A1 1 0 0 0 3 19H5M4 3 2.2 5.2A.5.5 0 0 0 2.4 6H4.7A.5.5 0 0 1 5 7L3 9"/><circle cx="17" cy="19" r="2"/><circle cx="7" cy="19" r="2"/></svg>`
        ).node);
    }
}

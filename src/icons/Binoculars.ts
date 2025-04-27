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

export class Binoculars extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10H14M19 7V4A1 1 0 0 0 18 3H16A1 1 0 0 0 15 4V7M20 21A2 2 0 0 0 22 19V15.1C22 13.8 20 12.1 20 10.3V8A1 1 0 0 0 19 7H15A1 1 0 0 0 14 8V19A2 2 0 0 0 16 21zM22 16H2M4 21A2 2 0 0 1 2 19V15.1C2 13.8 4 12.1 4 10.3V8A1 1 0 0 1 5 7H9A1 1 0 0 1 10 8V19A2 2 0 0 1 8 21zM9 7V4A1 1 0 0 0 8 3H6A1 1 0 0 0 5 4V7"/></svg>`
        ).node);
    }
}

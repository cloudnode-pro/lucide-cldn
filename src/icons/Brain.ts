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

export class Brain extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5A3 3 0 1 0 6 5.1 4 4 0 0 0 3.5 11 4 4 0 0 0 4 17.5 4 4 0 1 0 12 18ZM12 5A3 3 0 1 1 18 5.1 4 4 0 0 1 20.5 11 4 4 0 0 1 20 17.5 4 4 0 1 1 12 18Z"/><path d="M15 13A5 5 0 0 1 12 9 5 5 0 0 1 9 13M17.6 6.5 18 5.1M6 5.1 6.4 6.5M3.5 10.9 4 10.5M20 10.5 20.4 10.9M6 18A4 4 0 0 1 4 17.5M20 17.5A4 4 0 0 1 18 18"/></svg>`
        ).node);
    }
}

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

export class Pipette extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 9 3.6 17.4A2 2 0 0 0 3 18.8V20.2A2 2 0 0 1 2.4 21.6 2 2 0 0 1 3.8 21H5.2A2 2 0 0 0 6.6 20.4L15 12"/><path d="M18 9 18.4 9.4A1 1 0 1 1 15.4 12.4L11.6 8.6A1 1 0 1 1 14.6 5.6L15 6 18.4 2.6A1 1 0 1 1 21.4 5.6zM2 22 2.4 21.6"/></svg>`
        ).node);
    }
}

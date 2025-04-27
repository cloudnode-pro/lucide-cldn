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

export class Grape extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 5V2L16.1 7.9"/><circle cx="16.6" cy="15.9" r="3"/><circle cx="8.1" cy="7.4" r="3"/><circle cx="12.3" cy="11.7" r="3"/><circle cx="13.9" cy="5.8" r="3"/><circle cx="18.1" cy="10.1" r="3"/><circle cx="6.6" cy="13.2" r="3"/><circle cx="10.8" cy="17.4" r="3"/><circle cx="5" cy="19" r="3"/></svg>`
        ).node);
    }
}

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

export class Ambulance extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 10H6M14 18V6A2 2 0 0 0 12 4H4A2 2 0 0 0 2 6V17A1 1 0 0 0 3 18H5M19 18H21A1 1 0 0 0 22 17V13.7A1 1 0 0 0 21.3 12.7L19.3 12.2 18.9 11.6 17.3 8.6A1 1 0 0 0 16.3 8H14M8 8V12M9 18H15"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`
        ).node);
    }
}

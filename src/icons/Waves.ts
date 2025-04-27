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

export class Waves extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 6Q2.7 6.9 4.5 7C7 7 7 5 9.5 5 12.1 5 11.9 7 14.5 7 17 7 17 5 19.5 5Q21.3 5.1 22 6M2 12Q2.7 12.9 4.5 13C7 13 7 11 9.5 11 12.1 11 11.9 13 14.5 13 17 13 17 11 19.5 11Q21.3 11.1 22 12M2 18Q2.7 18.9 4.5 19C7 19 7 17 9.5 17 12.1 17 11.9 19 14.5 19 17 19 17 17 19.5 17Q21.3 17.1 22 18"/></svg>`
        ).node);
    }
}

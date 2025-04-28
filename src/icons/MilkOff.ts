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

/**
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2H16M9 2V3.3M15 2V4.8A4 4 0 0 0 15.7 7L16.3 8A4 4 0 0 1 17 10.2V11.3M7.8 7.8 7.7 8A4 4 0 0 0 7 10.2V20A2 2 0 0 0 9 22H15A2 2 0 0 0 17 20V17"/><path d="M7 15A7 7 0 0 1 12 15 7 7 0 0 0 15.4 15.4"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
 */
export class MilkOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 2H16M9 2V3.3M15 2V4.8A4 4 0 0 0 15.7 7L16.3 8A4 4 0 0 1 17 10.2V11.3M7.8 7.8 7.7 8A4 4 0 0 0 7 10.2V20A2 2 0 0 0 9 22H15A2 2 0 0 0 17 20V17"/><path d="M7 15A7 7 0 0 1 12 15 7 7 0 0 0 15.4 15.4"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`
        ).node);
    }
}

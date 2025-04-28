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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9V15M13.5 7H16A2 2 0 0 1 18 9V15A2 2 0 0 1 16 17H13.5M22 11V13M6.5 17H4A2 2 0 0 1 2 15V9A2 2 0 0 1 4 7H6.5M7 12H13"/></svg>
 */
export class BatteryPlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 9V15M13.5 7H16A2 2 0 0 1 18 9V15A2 2 0 0 1 16 17H13.5M22 11V13M6.5 17H4A2 2 0 0 1 2 15V9A2 2 0 0 1 4 7H6.5M7 12H13"/></svg>`
        ).node);
    }
}

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

export class HardDrive extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.5 5.1 2 12V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V12L18.6 5.1A2 2 0 0 0 16.8 4H7.2A2 2 0 0 0 5.5 5.1"/><line x1="6" x2="6" y1="16" y2="16"/><line x1="10" x2="10" y1="16" y2="16"/></svg>`
        ).node);
    }
}

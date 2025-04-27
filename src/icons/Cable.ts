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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21V19A1 1 0 0 1 16 18V17A2 2 0 0 1 18 15H20A2 2 0 0 1 22 17V18A1 1 0 0 1 21 19"/><path d="M19 15V6.5A1 1 0 0 0 12 6.5V17.5A1 1 0 0 1 5 17.5V9M21 21V19H17M3 5H7V3"/><path d="M7 5A1 1 0 0 1 8 6V7A2 2 0 0 1 6 9H4A2 2 0 0 1 2 7V6A1 1 0 0 1 3 5V3"/></svg>
 */
export class Cable extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21V19A1 1 0 0 1 16 18V17A2 2 0 0 1 18 15H20A2 2 0 0 1 22 17V18A1 1 0 0 1 21 19"/><path d="M19 15V6.5A1 1 0 0 0 12 6.5V17.5A1 1 0 0 1 5 17.5V9M21 21V19H17M3 5H7V3"/><path d="M7 5A1 1 0 0 1 8 6V7A2 2 0 0 1 6 9H4A2 2 0 0 1 2 7V6A1 1 0 0 1 3 5V3"/></svg>`
        ).node);
    }
}

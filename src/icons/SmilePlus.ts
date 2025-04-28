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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11V12A10 10 0 1 1 13 2"/><path d="M8 14S9.5 16 12 16 16 14 16 14"/><line x1="9" x2="9" y1="9" y2="9"/><line x1="15" x2="15" y1="9" y2="9"/><path d="M16 5H22M19 2V8"/></svg>
 */
export class SmilePlus extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11V12A10 10 0 1 1 13 2"/><path d="M8 14S9.5 16 12 16 16 14 16 14"/><line x1="9" x2="9" y1="9" y2="9"/><line x1="15" x2="15" y1="9" y2="9"/><path d="M16 5H22M19 2V8"/></svg>`
        ).node);
    }
}

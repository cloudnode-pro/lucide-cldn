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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 0 0 12 3 10 10 0 0 0 5.3 5.7L3 8"/><path d="M3 3V8H8M3 12A9 9 0 0 0 12 21 10 10 0 0 0 18.7 18.3L21 16"/><path d="M16 16H21V21"/></svg>
 */
export class RefreshCcw extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12A9 9 0 0 0 12 3 10 10 0 0 0 5.3 5.7L3 8"/><path d="M3 3V8H8M3 12A9 9 0 0 0 12 21 10 10 0 0 0 18.7 18.3L21 16"/><path d="M16 16H21V21"/></svg>`
        ).node);
    }
}

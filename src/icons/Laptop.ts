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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 16V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V16M20 16H4M20 16 21.3 18.6A1 1 0 0 1 20.3 20H3.7A1 1 0 0 1 2.7 18.6L4 16"/></svg>
 */
export class Laptop extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 16V7A2 2 0 0 0 18 5H6A2 2 0 0 0 4 7V16M20 16H4M20 16 21.3 18.6A1 1 0 0 1 20.3 20H3.7A1 1 0 0 1 2.7 18.6L4 16"/></svg>`
        ).node);
    }
}

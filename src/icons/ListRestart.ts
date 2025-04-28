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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 6H3M7 12H3M7 18H3M12 18A5 5 0 0 0 21 15 4.5 4.5 0 0 0 16.5 10.5Q14.5 10.5 13.1 11.9L11 14"/><path d="M11 10V14H15"/></svg>
 */
export class ListRestart extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 6H3M7 12H3M7 18H3M12 18A5 5 0 0 0 21 15 4.5 4.5 0 0 0 16.5 10.5Q14.5 10.5 13.1 11.9L11 14"/><path d="M11 10V14H15"/></svg>`
        ).node);
    }
}

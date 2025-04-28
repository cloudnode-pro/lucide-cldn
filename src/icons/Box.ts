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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8A2 2 0 0 0 20 6.3L13 2.3A2 2 0 0 0 11 2.3L4 6.3A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.7L11 21.7A2 2 0 0 0 13 21.7L20 17.7A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12 20.7 7M12 22V12"/></svg>
 */
export class Box extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 8A2 2 0 0 0 20 6.3L13 2.3A2 2 0 0 0 11 2.3L4 6.3A2 2 0 0 0 3 8V16A2 2 0 0 0 4 17.7L11 21.7A2 2 0 0 0 13 21.7L20 17.7A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12 20.7 7M12 22V12"/></svg>`
        ).node);
    }
}

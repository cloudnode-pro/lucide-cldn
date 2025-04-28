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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 5A11 11 0 0 1 22 11.8V12.3L20.5 14.8M14 14.2A3 3 0 0 1 9.9 9.9"/><path d="M17.5 17.5A10.8 10.8 0 0 1 2 12.3V11.7A11 11 0 0 1 6.5 6.5M2 2 22 22"/></svg>
 */
export class EyeOff extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.7 5A11 11 0 0 1 22 11.8V12.3L20.5 14.8M14 14.2A3 3 0 0 1 9.9 9.9"/><path d="M17.5 17.5A10.8 10.8 0 0 1 2 12.3V11.7A11 11 0 0 1 6.5 6.5M2 2 22 22"/></svg>`
        ).node);
    }
}

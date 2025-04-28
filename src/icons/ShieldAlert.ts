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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13C20 18 16.5 20.5 12.3 22H11.7C7.5 20.4 4 18 4 13V6A1 1 0 0 1 5 5C7 5 9.5 3.8 11.2 2.3A1 1 0 0 1 12.8 2.3C14.5 3.8 17 5 19 5A1 1 0 0 1 20 6zM12 8V12M12 16"/></svg>
 */
export class ShieldAlert extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M20 13C20 18 16.5 20.5 12.3 22H11.7C7.5 20.4 4 18 4 13V6A1 1 0 0 1 5 5C7 5 9.5 3.8 11.2 2.3A1 1 0 0 1 12.8 2.3C14.5 3.8 17 5 19 5A1 1 0 0 1 20 6zM12 8V12M12 16"/></svg>`
        ).node);
    }
}

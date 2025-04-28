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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 14 11 15M13.8 18.3 12.5 19.7M17.8 5.7A16 16 0 0 0 5.7 17.7M18.8 9.3A1 1 0 0 0 20.9 17"/><path d="M22 20.7A1 1 0 0 1 20.7 22L2.7 17A1 1 0 0 1 2 15.7 20 20 0 0 1 15.7 2 1 1 0 0 1 17 2.7z"/></svg>
 */
export class Pizza extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 14 11 15M13.8 18.3 12.5 19.7M17.8 5.7A16 16 0 0 0 5.7 17.7M18.8 9.3A1 1 0 0 0 20.9 17"/><path d="M22 20.7A1 1 0 0 1 20.7 22L2.7 17A1 1 0 0 1 2 15.7 20 20 0 0 1 15.7 2 1 1 0 0 1 17 2.7z"/></svg>`
        ).node);
    }
}

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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M9 22l3-8 3 8m-7 0h8"/><path d="M18 18.7a9 9 0 1 0-12 0"/></svg>
 */
export class FerrisWheel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><path d="M12 2v4m-5.2 9-3.5 2M20.7 7l-3.5 2M6.8 9 3.3 7m17.4 10-3.5-2M9 22l3-8 3 8m-7 0h8"/><path d="M18 18.7a9 9 0 1 0-12 0"/></svg>`
        ).node);
    }
}

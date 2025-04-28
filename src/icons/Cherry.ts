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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17A5 5 0 0 0 12 17C12 14.2 9.5 12 7 14 4.5 12 2 14.2 2 17M12 17A5 5 0 0 0 22 17C22 14.2 19.5 12 17 14 14.5 12 12 14.2 12 17"/><path d="M7 14C10.2 11 11.3 5.3 12 2 13.7 4.4 17 11 17 14"/><path d="M22 9C17.7 9 14.9 6.7 12 2 17.7 2 22 6.7 22 9"/></svg>
 */
export class Cherry extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 17A5 5 0 0 0 12 17C12 14.2 9.5 12 7 14 4.5 12 2 14.2 2 17M12 17A5 5 0 0 0 22 17C22 14.2 19.5 12 17 14 14.5 12 12 14.2 12 17"/><path d="M7 14C10.2 11 11.3 5.3 12 2 13.7 4.4 17 11 17 14"/><path d="M22 9C17.7 9 14.9 6.7 12 2 17.7 2 22 6.7 22 9"/></svg>`
        ).node);
    }
}

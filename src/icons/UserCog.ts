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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15H6A4 4 0 0 0 2 19V21M14.3 16.5 15.3 16.1M15.2 13.9 14.3 13.5M16.9 12.2 16.5 11.3M16.9 17.8 16.5 18.7M19.1 12.2 19.5 11.3M19.5 18.7 19.1 17.7M20.8 13.9 21.7 13.5M20.8 16.1 21.7 16.5"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>
 */
export class UserCog extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10 15H6A4 4 0 0 0 2 19V21M14.3 16.5 15.3 16.1M15.2 13.9 14.3 13.5M16.9 12.2 16.5 11.3M16.9 17.8 16.5 18.7M19.1 12.2 19.5 11.3M19.5 18.7 19.1 17.7M20.8 13.9 21.7 13.5M20.8 16.1 21.7 16.5"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/></svg>`
        ).node);
    }
}

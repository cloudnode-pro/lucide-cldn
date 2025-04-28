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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17 18.8 15.1A.5.5 0 0 0 18 15.5V16A1 1 0 0 1 17 17H15A1 1 0 0 1 14 16C14 13.5 10 12 5.5 12A1 1 0 0 0 5.5 17C9.7 17 10.2 5.7 11.2 3.5A2.5 2.5 0 1 1 14.5 6.8M3 21H21"/></svg>
 */
export class Signature extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M21 17 18.8 15.1A.5.5 0 0 0 18 15.5V16A1 1 0 0 1 17 17H15A1 1 0 0 1 14 16C14 13.5 10 12 5.5 12A1 1 0 0 0 5.5 17C9.7 17 10.2 5.7 11.2 3.5A2.5 2.5 0 1 1 14.5 6.8M3 21H21"/></svg>`
        ).node);
    }
}

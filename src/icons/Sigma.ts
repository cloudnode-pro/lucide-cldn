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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7V5A1 1 0 0 0 17 4H6.5A.5.5 0 0 0 6.1 4.8L10.6 10.8A2 2 0 0 1 10.6 13.2L6.1 19.2A.5.5 0 0 0 6.5 20H17A1 1 0 0 0 18 19V17"/></svg>
 */
export class Sigma extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18 7V5A1 1 0 0 0 17 4H6.5A.5.5 0 0 0 6.1 4.8L10.6 10.8A2 2 0 0 1 10.6 13.2L6.1 19.2A.5.5 0 0 0 6.5 20H17A1 1 0 0 0 18 19V17"/></svg>`
        ).node);
    }
}

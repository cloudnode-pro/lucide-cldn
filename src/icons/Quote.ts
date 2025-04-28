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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3A2 2 0 0 0 14 5V11A2 2 0 0 0 16 13 1 1 0 0 1 17 14V15A2 2 0 0 1 15 17 1 1 0 0 0 14 18V20A1 1 0 0 0 15 21 6 6 0 0 0 21 15V5A2 2 0 0 0 19 3zM5 3A2 2 0 0 0 3 5V11A2 2 0 0 0 5 13 1 1 0 0 1 6 14V15A2 2 0 0 1 4 17 1 1 0 0 0 3 18V20A1 1 0 0 0 4 21 6 6 0 0 0 10 15V5A2 2 0 0 0 8 3z"/></svg>
 */
export class Quote extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M16 3A2 2 0 0 0 14 5V11A2 2 0 0 0 16 13 1 1 0 0 1 17 14V15A2 2 0 0 1 15 17 1 1 0 0 0 14 18V20A1 1 0 0 0 15 21 6 6 0 0 0 21 15V5A2 2 0 0 0 19 3zM5 3A2 2 0 0 0 3 5V11A2 2 0 0 0 5 13 1 1 0 0 1 6 14V15A2 2 0 0 1 4 17 1 1 0 0 0 3 18V20A1 1 0 0 0 4 21 6 6 0 0 0 10 15V5A2 2 0 0 0 8 3z"/></svg>`
        ).node);
    }
}

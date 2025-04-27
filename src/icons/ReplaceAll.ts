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

export class ReplaceAll extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14 14A2 2 0 0 1 16 16V20A2 2 0 0 1 14 22M14 4A2 2 0 0 1 16 2M16 10A2 2 0 0 1 14 8M20 14A2 2 0 0 1 22 16V20A2 2 0 0 1 20 22M20 2A2 2 0 0 1 22 4M22 8A2 2 0 0 1 20 10M3 7 6 10 9 7"/><path d="M6 10V5A3 3 0 0 1 9 2H10"/><rect width="8" height="8" x="2" y="14" rx="2"/></svg>`
        ).node);
    }
}

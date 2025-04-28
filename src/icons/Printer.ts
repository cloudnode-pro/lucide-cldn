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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18H4A2 2 0 0 1 2 16V11A2 2 0 0 1 4 9H20A2 2 0 0 1 22 11V16A2 2 0 0 1 20 18H18M6 9V3A1 1 0 0 1 7 2H17A1 1 0 0 1 18 3V9"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>
 */
export class Printer extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18H4A2 2 0 0 1 2 16V11A2 2 0 0 1 4 9H20A2 2 0 0 1 22 11V16A2 2 0 0 1 20 18H18M6 9V3A1 1 0 0 1 7 2H17A1 1 0 0 1 18 3V9"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>`
        ).node);
    }
}

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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2m-.126-13.257 1 1.732m1.975 3.477 1 1.732m1.975 3.496a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839m2.951-5.209-1 1.732M8 21h2M8.102 7.743l-1 1.732"/></svg>
 */
export class TriangleDashed extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M10.17 4.193a2 2 0 0 1 3.666.013M14 21h2m-.126-13.257 1 1.732m1.975 3.477 1 1.732m1.975 3.496a2 2 0 0 1-1.835 2.824M4.024 21a2 2 0 0 1-1.839-2.839m2.951-5.209-1 1.732M8 21h2M8.102 7.743l-1 1.732"/></svg>`
        ).node);
    }
}

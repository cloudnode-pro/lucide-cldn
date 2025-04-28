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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.2 12.3 20 6H4L5.8 12.3A1 1 0 0 0 6.8 13H17.3A1 1 0 0 0 18.3 12.3ZM8 13V22M16 22V13M9 6 10 13M15 6 14 13M12 6V2M13 2H11"/></svg>
 */
export class TowerControl extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M18.2 12.3 20 6H4L5.8 12.3A1 1 0 0 0 6.8 13H17.3A1 1 0 0 0 18.3 12.3ZM8 13V22M16 22V13M9 6 10 13M15 6 14 13M12 6V2M13 2H11"/></svg>`
        ).node);
    }
}

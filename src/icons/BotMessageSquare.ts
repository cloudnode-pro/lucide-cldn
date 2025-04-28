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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V2H8M8 18 4 22V8A2 2 0 0 1 6 6H18A2 2 0 0 1 20 8V16A2 2 0 0 1 18 18ZM2 12H4M9 11V13M15 11V13M20 12H22"/></svg>
 */
export class BotMessageSquare extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M12 6V2H8M8 18 4 22V8A2 2 0 0 1 6 6H18A2 2 0 0 1 20 8V16A2 2 0 0 1 18 18ZM2 12H4M9 11V13M15 11V13M20 12H22"/></svg>`
        ).node);
    }
}

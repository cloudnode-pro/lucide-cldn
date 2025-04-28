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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V12A10 10 0 1 1 22 12V22"/><path d="M15 6.8V8.2A3 2.8 0 1 1 9 8.2V6.8M14 15"/><path d="M10 19A4 4 0 0 1 6 15V12A6 6 0 1 1 18 12V15A4 4 0 0 1 14 19ZM9 19 7 22M15 19 17 22"/></svg>
 */
export class TrainFrontTunnel extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M2 22V12A10 10 0 1 1 22 12V22"/><path d="M15 6.8V8.2A3 2.8 0 1 1 9 8.2V6.8M14 15"/><path d="M10 19A4 4 0 0 1 6 15V12A6 6 0 1 1 18 12V15A4 4 0 0 1 14 19ZM9 19 7 22M15 19 17 22"/></svg>`
        ).node);
    }
}

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

export class Layers2 extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M13 13.7A2 2 0 0 1 11 13.7L2.5 9A1 1 0 0 1 2.5 7L11 2.3A2 2 0 0 1 13 2.3L21.5 7A1 1 0 0 1 21.5 9zM20 14.3 21.5 15A1 1 0 0 1 21.5 17L13 21.7A2 2 0 0 1 11 21.7L2.5 17A1 1 0 0 1 2.5 15L4 14.3"/></svg>`
        ).node);
    }
}

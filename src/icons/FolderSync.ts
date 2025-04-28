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
 * <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V8.5"/><path d="M12 10V14H16"/><path d="M12 14 13.5 12.4A5 5 0 0 1 21.5 13.9M22 22V18H18"/><path d="M22 18 20.5 19.6A5 5 0 0 1 12.5 18.1"/></svg>
 */
export class FolderSync extends Icon {
    public constructor() {
        super(Icon.from(
            `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M9 20H4A2 2 0 0 1 2 18V5A2 2 0 0 1 4 3H7.9A2 2 0 0 1 9.6 3.9L10.4 5.1A2 2 0 0 0 12.1 6H20A2 2 0 0 1 22 8V8.5"/><path d="M12 10V14H16"/><path d="M12 14 13.5 12.4A5 5 0 0 1 21.5 13.9M22 22V18H18"/><path d="M22 18 20.5 19.6A5 5 0 0 1 12.5 18.1"/></svg>`
        ).node);
    }
}

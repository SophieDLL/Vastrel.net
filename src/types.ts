export interface SiteConfig {
	author: string;
	date: {
		options: Intl.DateTimeFormatOptions;
	};
	description: string;
	lang: string;
	ogLocale: string;
	showLogo: boolean;
	title: string;
	url: string;
}

export interface MenuLink {
	children?: MenuLink[];
	external?: boolean;
	path: string;
	title: string;
}

export interface PaginationLink {
	srLabel?: string;
	text?: string;
	url: string;
}

export interface SiteMeta {
	articleDate?: string | undefined;
	description?: string;
	ogImage?: string | undefined;
	title: string;
}

export type AdmonitionType = "tip" | "note" | "important" | "caution" | "warning";

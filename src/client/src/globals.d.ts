declare module '*.scss';
declare module '*.sass';
declare module '*.eml';

declare module '*.xlsx';
declare module '*.zip';
declare module '*.exe';



declare interface User {
	email: string | null | undefined;
	password: string | null | undefined;
}

declare interface Message {
	id: number;
	subject: string;
	from: string;
	sender: string;
	to: string | null;

	date: string;
	type: BoxState;
	read: boolean;
	favorite: boolean;
	avatar?: string;
    
	payload: unknown;
	eml: string;
	files: File[];
}

declare interface File {
	name: string
	preview: string
	content: string
}

declare type BoxState =
	| 'inbox'
	| 'trash'
	| 'spam'
	| 'sent'
	| 'drafts'
	| 'favorite';

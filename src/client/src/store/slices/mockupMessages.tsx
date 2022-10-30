import React from 'react';
import Google from '../../assets/Google.svg';
import MailRu from '../../assets/MailRu.svg';
import Vk from '../../assets/Vk.svg';
import Yandex from '../../assets/Yandex.svg';
import Youtube from '../../assets/Youtube.svg';
import formatDate from '../../formatDate';

// messages
import YandexMessage from '../../lab/YandexMessage';
import MailRuMessage from '../../lab/MailRuMessage';
import YoutubeMessage from '../../lab/YoutubeMessage';
import VkMessage from '../../lab/VkMessage';
import GoogleMessage from '../../lab/GoogleMessage';

// .eml links
import YandexEML from '../../lab/eml/yandex.eml';
import MailRuEML from '../../lab/eml/mailru.eml';
import YoutubeEML from '../../lab/eml/youtube.eml';
import VkEML from '../../lab/eml/vk.eml';
import GoogleEML from '../../lab/eml/google.eml';

//files links
import Table from '../../lab/files/Table.xlsx';
import TableZIP from '../../lab/files/Table.zip';
import dangerExe from '../../lab/files/py.zip.exe';
import Archive from '../../lab/files/CoolScript.zip';


export default [
	{
		id: 1,
		subject: 'Someone is trying to log into your Yandex account',
		from: 'Yandex',
		sender: 'yandex.suport6@yandex.ru',
		to: 'admin@hacktory.com',

		read: false,
		date: formatDate(new Date()),
		favorite: false,
		type: 'inbox',
		avatar: Yandex,
		
		payload: (<YandexMessage />),
		eml: YandexEML,
		files: [{
			name: 'py.zip.exe',
			content: dangerExe,
			preview: 'exe'
		}, 
		{
			name: 'py.zip.exe',
			content: dangerExe,
			preview: 'exe'
		}]
	},
	{
		id: 2,
		subject: 'Log in from a new device to your account',
		from: 'Mail.ru',
		sender: 'securiti@id.mail.ru',
		to: 'admin@hacktory.com',


		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: MailRu,

		payload: (<MailRuMessage />),
		eml: MailRuEML,
		files: [{
			name: 'Table.zip',
			content: TableZIP,
			preview: 'exe'
		}]
	},
	{
		id: 3,
		subject: 'New video from your favorite channel!',
		from: 'Youtube',
		sender: 'no-reply@youtube.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Youtube,

		payload: (<YoutubeMessage />),
		eml: YoutubeEML,
		files: [{
			name: 'aaaa.zip.exe',
			content: Archive,
			preview: 'exe'
		}]
	},
	{
		id: 4,
		subject: 'Approve password change',
		from: 'Vk',
		sender: 'admin@notify.vk.ru',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Vk,

		payload: (<VkMessage />),
		eml: VkEML,
		files: [{
			name: 'CoolScript.zip',
			content: Archive,
			preview: 'exe'
		}]
	},
	{
		id: 5,
		subject: 'Someone added your email address as a backup',
		from: 'Google',
		sender: 'no-reply@accounts.google.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Google,

		payload: (<GoogleMessage />),
		eml: GoogleEML,
		files: [{
			name: 'Table.xlsx',
			content: Table,
			preview: 'exe'
		}]
	}
] as Message[];
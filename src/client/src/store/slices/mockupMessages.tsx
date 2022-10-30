import React from 'react';
import formatDate from '../../formatDate';

// corp icons
import Google from '../../assets/Google.svg';
import Apple from '../../assets/Apple_logo.svg';
import HeadHunter from '../../assets/hh-red_logo.png';
import Microsoft from '../../assets/Microsoft_logo.svg';
import Youtube from '../../assets/Youtube.svg';

// messages
import HHruMessage from '../../lab/HHruMessage';
import MicrosoftMessage from '../../lab/MicrosoftMessage';
import YoutubeMessage from '../../lab/YoutubeMessage';
import AppleMessage from '../../lab/AppleMessage';
import GoogleMessage from '../../lab/GoogleMessage';

// .eml links
import AppleEML from '../../lab/eml/Apple.eml';
import GoogleEML from '../../lab/eml/Google.eml';
import HHruEML from '../../lab/eml/HHru.eml';
import YoutubeEML from '../../lab/eml/Youtube.eml';
import MicrosoftEML from '../../lab/eml/Microsoft.eml';

//files links
import microsoftTerms from '../../lab/files/microsoftTerms.pdf';

import Table from '../../lab/files/Table.xlsx';
// import TableZIP from '../../lab/files/Table.zip';
import dangerExe from '../../lab/files/py.zip.exe';
import Archive from '../../lab/files/CoolScript.zip';


export default [
	{
		id: 1,
		subject: 'You have received a new response to a vacancy!',
		from: 'HeadHunter',
		sender: 'noreply@hh.ru',
		to: 'admin@hacktory.com',

		read: false,
		date: formatDate(new Date()),
		favorite: false,
		type: 'inbox',
		avatar: HeadHunter,
		
		payload: (<HHruMessage />),
		eml: HHruEML,
		files: [{
			name: 'py.zip.exe',
			content: dangerExe,
		}, 
		{
			name: 'py.zip.exe',
			content: dangerExe,
		}]
	},
	{
		id: 2,
		subject: 'Updated Terms of Use',
		from: 'Microsoft',
		sender: 'msa@communication.microsoft.com',
		to: 'admin@hacktory.com',


		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Microsoft,

		payload: (<MicrosoftMessage />),
		eml: MicrosoftEML,
		files: [{
			name: 'Terms.pdf',
			content: microsoftTerms,
		}]
	},
	{
		id: 3,
		subject: 'Important changes on YouTube (action required)',
		from: 'Youtube Creators',
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
		}]
	},
	{
		id: 4,
		subject: 'Creating a corporate Apple ID',
		from: 'Apple',
		sender: 'appleid@id.apple.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Apple,

		payload: (<AppleMessage />),
		eml: AppleEML,
		files: [{
			name: 'CoolScript.zip',
			content: Archive,
		}]
	},
	{
		id: 5,
		subject: 'Google maps timeline!',
		from: 'Google',
		sender: 'noreply-maps-timeline@google.com',
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
		}]
	}
] as Message[];
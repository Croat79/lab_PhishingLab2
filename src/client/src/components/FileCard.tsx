import React from 'react';
import xls from '../assets/XLS.svg';
import file from '../assets/File.svg';
import archive from '../assets/Archive.svg';

import classes from '../styles/FileCard.module.sass';

const extensions: {
	[key: string]: string;
} = {
	xls: xls,
	xlsx: xls,
	other: file,
	zip: archive,
};

const getFileExtension = (filename: string): string => filename.split('.')[filename.split('.').length-1];
const getImageByExtension = (filename: string) => extensions[getFileExtension(filename)] || file;
const getFileName = (filename: string, showExt = false) => showExt ? filename : filename.split('.').slice(0, -1).join('.');



const FileCard = ({ show, file }: { show: boolean; file: File }) => {

	const downloadFile = () => {
		const a = document.createElement('a');
		a.href = file.content;
		a.download = file.name;
		a.click();
		a.remove();
	};


	return (
		<div onClick={downloadFile} className={classes.fileCard}>
			<img height={100} width={100} src={getImageByExtension(file.name)} alt="File icon" />
			<p>{getFileName(file.name, show)}</p>
		</div>
	);
};

export default FileCard;

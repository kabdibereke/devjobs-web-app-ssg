export interface IJobs {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: IRequirements;
	role: IRole;
}

export interface IRequirements {
	content: string;
	items: string[];
}

export interface IRole {
	content: string;
	items: string[];
}

export interface jobsProps {
	jobs: IJobs[];
}
export interface jobsProp {
	jobs: IJobs;
}

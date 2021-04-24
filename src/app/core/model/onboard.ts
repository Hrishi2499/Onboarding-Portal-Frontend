import { Candidate } from "./candidate";
import { HiringManager } from "./hiring-manager";

export class Onboard {
    onboardId:number;
	candidateId:number;
	hmId: number;
	onboardStatus: string;
	bgStatus: string;
	startDate: string;
	eta: string;
	location: string;
	
	candidate: Candidate;
	hiringManager: HiringManager;
}

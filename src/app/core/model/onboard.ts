import { Candidate } from "./candidate";
import { HiringManager } from "./hiring-manager";

export class Onboard {
	user: string;
	userEmail:string;
    onboardId:number;
	candidateId:number;
	hmId: number;
	onboardStatus: string;
	startDate: string;
	eta: string;
	location: string;
	bgStatus: boolean;
	graduation: boolean;
	training: boolean;
	
	candidate: Candidate;
	hiringManager: HiringManager;
}

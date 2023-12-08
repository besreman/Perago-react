export interface Employee {
	name: string;
	role: string;
	address: string;
	salary: number;
	id: string;
}

export interface Role {
	name: string;
	childrens: Role[];
}

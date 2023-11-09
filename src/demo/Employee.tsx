export interface Employee {
	id: string;
	name: string;
	role: string;
	address: string;
	salary: number;
}

export interface Role {
	name: string;
	childrens: Role[];
}

export interface Intern {
    id: number;

    name: string;

    email: string;

    phone: string;

    department: string;

    college: string;

    status: 'Active' | 'On Leave' | 'Completed';

    progress: number;

    avatar: string;

    joiningDate: string;

    skills: string[];
}
export type Education = {
    title: string;
    place?: string;
    grade?: string;
    period?: string;
}

export type WorkXpSection = {
    title: string;
    place: string;
    roles: Role [];
}

export type Role = {
    name: string;
    period: string;
    tasks: string[]
}

export type Publications = {
    title: string;
    link: string;
    intro: string;
}

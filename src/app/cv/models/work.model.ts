export interface Works {
    workName: string;
    positions: Array<string>;
    dates: string;
    accomplishments: Array<Accomplishments>;
}

export interface Accomplishments {
    client: string,
    accomplishment: string,
    technologies: Array<string>
}
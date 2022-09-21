interface ProjectState {
    name: string,
    baud_rate: number,
    initials: string,
    dbc_file: string | null,
    blacklist_file: string | null,
}

export default ProjectState
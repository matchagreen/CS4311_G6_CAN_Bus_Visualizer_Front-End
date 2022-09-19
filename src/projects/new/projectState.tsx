interface ProjectState {
    name: string,
    baud_rate: number,
    initials: string,
    dbc_file?: File,
    blacklist_file?: File,
}

export default ProjectState
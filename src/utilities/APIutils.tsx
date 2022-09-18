class APIUtil {
    url = 'http://localhost:8000'

    getProjectList() {
        fetch(this.url + '/projects')
            .then((response) => response.json)
            .then((responseJson) => {return responseJson})
    }

    createProject() {
        fetch(this.url + '/projects/new', {method: 'POST'})
            .then((response) => response.json)
            .then((responseJson) => {return responseJson})
    }
}

export default APIUtil
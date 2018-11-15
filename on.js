let app = {
    ARRdata: {},
    on(event, cb) {
        if (this.ARRdata[event]) {
            this.ARRdata[event].push(cb)
        } else {
            this.ARRdata[event] = [cb]
        }
    },
    emit(event, keys) {
        for (var key in this.ARRdata) {
            if (this.ARRdata.hasOwnProperty(key) && key == event) {
                let arr = this.ARRdata[key]
                arr.forEach(element => {
                    element(keys)
                });
            }
        }
    },
    destroyed(event) {

    }
}
module.exports = app
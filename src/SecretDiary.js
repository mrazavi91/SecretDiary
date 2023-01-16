


class SecretDiary{

    
    constructor(entries=[], isLocked = true) {
        this.isLocked = isLocked
        this.entries = entries
    }
    
    lock() {
        this.isLocked = true
        
    }
    unlock() {
        this.isLocked = false
    }
    
    addEntry(entry) {
        if (this.isLocked)
        {console.log(`Error: diary is locked!`); return }
        this.entries.push(entry)
    }

    getEntries() {
        if (this.isLocked) { console.log(`Error: diary is locked!`); return }
        console.log(this.entries)
    }

    
    

    
}

module.exports = SecretDiary
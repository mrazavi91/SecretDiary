SecretDiary
    - lock()
    - unlock()
    - addEntry()
    - getEntries()

Initially the SecretDiary class is locked, meaning addEntry(str) and getEntries() should throw an error.
When the user calls unlock(), addEntry() and getEntries() should work as desired.
When the user calls lock() again addEntry() and getEntries() throw errors.



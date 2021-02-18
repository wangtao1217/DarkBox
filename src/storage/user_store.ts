import LocalStorageFactory from './storage'

const user_store = LocalStorageFactory({
    key: '__session',
    defaultvalue: {},
});

export default user_store
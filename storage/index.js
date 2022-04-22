
import {AsyncStorage} from 'react-native'
import Storage from 'react-native-storage'

let storage = undefined
let defaultExpires = null
let size = 1000

const createStorage = () => {

  storage = new Storage({
    size: size,
    storageBackend: AsyncStorage,
    defaultExpires: defaultExpires,
    enableCache: true,
  })
}

const initStorage = () => {
  if (!storage) {
    createStorage()
  }
}

const _storage = {
  save(key, obj) {
    initStorage()
    storage.save({
      key: key,
      data: obj,
      expires: null
    })
  },

  // 取数据
  load(key, callBack) {
    initStorage()
    storage.load({
      key: key,
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {
        },
        someFlag: true,
      }
    }).then(ret => {

      callBack && callBack(ret)
      return ret
    }).catch(err => {

      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          break
        case 'ExpiredError':
          break
      }
    })
  },
  getIdsForKey(id, callback) {
    initStorage()
    storage.getIdsForKey(id).then(ids => {
      callback && callback(ids)
    })
  },

  getAllDataForKey(key, callback) {
    initStorage()
    storage.getAllDataForKey(key).then(users => {
      callback && callback(users)
    })
  },

  clearMapForKey(key) {
    initStorage()
    storage.clearMapForKey(key)
  },

  remove(key) {
    initStorage()
    storage.remove({
      key: key
    })
  },

  clearMap() {
    initStorage()
    storage.clearMap()
  }
}

export {_storage as storage}
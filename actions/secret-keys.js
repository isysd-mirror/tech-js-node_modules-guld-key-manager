import { listSecretKeys } from 'keyring-gpg'
import { getName } from 'guld-user'
import { getFS } from 'guld-fs'
import home from 'user-home'
import * as path from 'path'
let fs

export const secretKeysRead = () => ({
  type: 'SECRET_KEYS_READ'
});

export const secretKeysSuccess = secret_keys => ({
  type: 'SECRET_KEYS_SUCCESS',
  secret_keys,
});

export const secretKeysFail = error => ({
  type: 'SECRET_KEYS_FAIL',
  error,
});

export const setUrl = url => ({
  type: 'URL',
  url,
});

export const setReading = reading => ({
  type: 'READING',
  reading,
});

export const mapNamesToFPR = async function (fpr) {
  if (typeof fpr === 'string') fpr = [fpr]
  fs = fs || await getFS(true)
  var kn = {}
  var names = await fs.readdir(path.join(home, '/keys/pgp/'))
  for (var i = 0; i < names.length; i++) {
    if (fpr.length === 0) return kn
    var p = path.join(home, '/keys/pgp/', names[i])
    var keys = await fs.readdir(p).catch(e => [])
    if (fpr.length === 0) return kn
    if (keys.length > 0) {
      keys.forEach(key => {
        key = key.replace('.asc', '')
        if (fpr.indexOf(key) >= 0) {
          kn[key] = names[i]
          fpr = fpr.filter(f => {
            return f !== key
          })
        }
        if (fpr.length === 0) return kn
      })    
    }
  }
  if (Object.keys(kn).length === 0) throw new Error('No names found.')
  else return kn
}

export function readSecretKeys (keyid) {
  return function(dispatch) {
    dispatch(secretKeysRead(keyid));
    return listSecretKeys().then(keys => {
      return mapNamesToFPR(Object.keys(keys)).then(fprs => {
        return dispatch(secretKeysSuccess(fprs));
      }).catch(e => {
        dispatch(secretKeysFail(e));
      })
    }).catch(e => {
      dispatch(secretKeysFail(e));
    });
  }
}


#!/bin/bash
linklib () {
    if [ ! -e $1/$2 ]; then
        mkdir -p src/$1
        ln -s $HOME/$1/$2 src/$1/$2
    fi
}

linklib tech/js/node_modules/jquery/dist jquery.min.js
linklib tech/js/node_modules/bootstrap/dist/js bootstrap.bundle.min.js
linklib tech/js/node_modules/fontawesome/svg-with-js/js fontawesome-all.min.js
linklib tech/js/node_modules/openpgp/dist openpgp.min.js
linklib tech/js/node_modules/decimal.js decimal.min.js
linklib tech/js/node_modules/qs-local-window qs-local-window.js
linklib tech/js/node_modules/error-display error-display.js
linklib tech/js/node_modules/marked marked.min.js
linklib tech/js/node_modules/load-html-component load-html-component.js
linklib tech/js/node_modules/password-modal password-modal.js
linklib tech/js/node_modules/git-config-ini ini.min.js
linklib tech/js/node_modules/ledger-types ledger-types.min.js
linklib tech/js/node_modules/guld-ledger-transfer guld-ledger-transfer.min.js
linklib tech/js/node_modules/bootswatch/dist/darkly bootstrap.min.css
linklib tech/js/node_modules/fontawesome/svg-with-js/css fa-svg-with-js.min.css
linklib Pictures/guld/logo icon16.png
linklib Pictures/guld/logo icon32.png
linklib Pictures/guld/logo icon48.png
linklib Pictures/guld/logo icon128.png
linklib Pictures/guld/logo favicon.png
linklib Pictures/guld/logo logo.svg
linklib Pictures/guld/logo ico.svg
linklib Documents/guld/html/components body.html
linklib Documents/guld/html/components header.html
linklib Documents/guld/html/components footer.html
linklib Documents/guld/html/templates index.html


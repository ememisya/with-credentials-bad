#!/bin/bash
mkdir -p ./pids
eval 'node ./evilserver.js &' && eval 'node ./goodserver.js &' && eval 'node ./client.js &'

#!/bin/bash
[[ -e ./pids/evilserver.js.pid ]] && kill $(cat ./pids/evilserver.js.pid)
[[ -e ./pids/goodserver.js.pid ]] && kill $(cat ./pids/goodserver.js.pid)
[[ -e ./pids/client.js.pid ]] && kill $(cat ./pids/client.js.pid)
rm ./pids/*.pid

# -*- encoding: utf-8 -*-

from channels.routing import route
from .consumers import *

channel_routing = [
    route("websocket.connect", ws_join),
    route("websocket.receive", ws_message),
    route("websocket.disconnect", ws_leave),
]

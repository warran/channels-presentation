# -*- encoding: utf-8 -*-

import os
from channels.asgi import get_channel_layer

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "channels_chat.settings")

channel_layer = get_channel_layer()

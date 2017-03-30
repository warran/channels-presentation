# -*- encoding: utf-8 -*-

import json

from channels import Group

from .models import Message


CHAT_GROUPNAME = 'chat'


def ws_join(message):
    """This consumer is being called when the websocket channel
    is being opened.
    """
    message.reply_channel.send({"accept": True})
    Group(CHAT_GROUPNAME).add(message.reply_channel)

    all_messages = Message.objects.all()
    messages_json = json.dumps([m.to_dict() for m in all_messages])
    message.reply_channel.send({'text': messages_json})


def ws_message(message):
    """This consumer is being called with each message received
    on the websocket channel.
    """
    print(message.content)
    msg_text = message.content['text']
    Message.from_dict(json.loads(msg_text)).save()
    Group(CHAT_GROUPNAME).send({'text': msg_text})


def ws_leave(message):
    """Thise one is called when the connection is closed (maybe
    due to an error!)
    """
    Group(CHAT_GROUPNAME).discard(message.reply_channel)

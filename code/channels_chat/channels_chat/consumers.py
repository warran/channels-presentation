# -*- encoding: utf-8 -*-

from channels import Group

from .models import Message


CHAT_GROUPNAME = 'chat'


def ws_join(message):
    """This consumer is being called when the websocker channel
    is being opened.
    """
    message.reply_channel.send({"accept": True})
    Group(CHAT_GROUPNAME).add(message.reply_channel)


def ws_message(message):
    """This consumer is being called with each message received
    on the websocker channel.
    """
    msg = {k: message.content[k] for k in ['user', 'msg_text']}
    Message(**msg).save()
    Group(CHAT_GROUPNAME).send(msg)


def ws_leave(message):
    """Thise one is called when the connection is closed (maybe
    due to an error!)
    """
    Group(CHAT_GROUPNAME).discard(message.reply_channel)

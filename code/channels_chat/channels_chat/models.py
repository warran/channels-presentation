# -*- encoding: utf-8 -*-

import json
from django.db import models


class Message(models.Model):
    user = models.CharField(max_length=30)
    message = models.TextField()
    type = models.CharField(max_length=8, choices=[('chat', 'chat'), ('question', 'question')])
    created_at = models.DateTimeField(auto_now_add=True)

    def to_dict(self):
        return {
            'user': self.user,
            'text': self.message,
            'time': self.created_at.isoformat()
                    if hasattr(self.created_at, 'isoformat')
                    else self.created_at,
            'type': self.type
        }

    # this method is here because of lack of consistency
    # between Message object fields in BE and FE :/ sorry
    @classmethod
    def from_dict(cls, dict):
        if 'text' in dict and 'message' not in dict:
            dict['message'] = dict['text']
            del dict['text']

        if 'time' in dict and 'created_at' not in dict:
            dict['created_at'] = dict['time']
            del dict['time']

        return cls(**dict)

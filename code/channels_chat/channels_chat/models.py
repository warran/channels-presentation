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
            'time': self.created_at,
            'type': self.type
        }

# -*- encoding: utf-8 -*-

from django.db import models


class Message(models.Model):
    user = models.CharField(max_length=30)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

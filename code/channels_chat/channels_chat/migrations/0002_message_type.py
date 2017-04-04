# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 22:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels_chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='type',
            field=models.CharField(choices=[('chat', 'chat'), ('question', 'question')], default='chat', max_length=8),
            preserve_default=False,
        ),
    ]
# -*- encoding: utf-8 -*-

from django.http import JsonResponse
from django.shortcuts import render

from .models import Message


def home(request):
    return render('channels_chat/index.html')


def messages(request):
    msgs = Message.objects.order_by('created_at')
    return JsonResponse(msgs, safe=False)

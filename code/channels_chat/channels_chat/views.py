# -*- encoding: utf-8 -*-

from django.http import JsonResponse
from django.shortcuts import render_to_response

from .models import Message


def home(request):
    return render_to_response('channels_chat/index.html')


def messages(request):
    msgs = Message.objects.order_by('created_at')
    return JsonResponse(msgs, safe=False)

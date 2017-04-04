# Code

This directory contains the code of example chat webapp prepared using
Django, Channels and React.

## Code structure

The app was written using Django with Channels. The structure is one of
a regular Django app, but two of the modules may be of particular
interest.

_consumers.py_ contains a code of the Websocket workers powered by 
Django Channels. Docstrings of those worker functions provide
some additional explanation on their purpose.

_routing.py_ contains routing definitions of Websocket traffic 
to the appropriate worker functions.

Setting _CHANNEL_LAYERS_ is _settings.py_ may also be of some interest.

### Frontend

If you're interested, you can find the code of a frontend application
un the _static_ directory of _channels_chat_ application.

The app was written using React with Redux.

To build the app, go into the _js/chat_ directory, install npm
dependencies, and run webpack

```bash
$ node install
$ webpack
```

Packed app will be available in _js/chat.js_ file. Sourcemaps are not 
included.

## Building and deploying the application

### Running localy

Channels have been configured to use in-memory backed for sending
the traffic/messages to the workers. This setting is enough to get
us started and run the app localy.

In order to run the app, one needs to install the dependencies

```bash
$ pip install -r requirements.txt
```

Before we run the app, we also need to run migrations. We are using
SQLite here, so there's no need for any DB set-up.

```bash
$ ./manage.py migrate
```

Among regular packages, like SQLAlchemy, with requirements we also 
installed _Daphne_ - an [ASGI](https://channels.readthedocs.io/en/stable/asgi.html)
server that comes with Channels. You can run it using regular Django
runserver command

```bash
$ ./manage.py runserver
```

Now we can visit 127.0.0.1:8000 to see the app up and running!

### Deploying to the server

To run the application on the server put the code on the server and
install the requirements. 

In real world situation we usually want our workers to run on different
machine than the 'regular' app. For now, we'll just show how to run them
in different process.

First install Redis. We also need to modify settings a little bit, to 
use backend that will allow cross-process communication:

```python
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "asgi_redis.RedisChannelLayer",
        "CONFIG": {
            "hosts": [("localhost", 6379)],
        },
        "ROUTING": "channels_chat.routing.channel_routing",
    },
}
```

Now we just need to run two processes, one with the workers, and second
one with the 'regular' app (interface server):

```bash
$ ./manage.py runworker

# issue second command in different terminal

$ daphne chanels_chat.asgi:channel_layer
```

You can put it under _supervisor_ to make sure the app will restart on
failure.

That's it! Play around, adjust to your needs, and have fun! :)

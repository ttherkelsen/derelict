#!/usr/bin/env python

import os
import sys

os.environ['DJANGO_SETTINGS_MODULE'] = 'dnsadmin.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()

path = '/raid/www/lowtek.dk/da/django'
if path not in sys.path:
    sys.path.append(path)
